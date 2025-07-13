import gspread
from google.oauth2.service_account import Credentials
import re
from typing import List, Optional
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class GoogleSheetDateConverter:
    def __init__(self, credentials_file: str):
        """
        Initialize the Google Sheet Date Converter.
        
        Args:
            credentials_file (str): Path to the Google Service Account credentials JSON file
        """
        self.credentials_file = credentials_file
        self.client = None
        self._authenticate()
    
    def _authenticate(self):
        """Authenticate with Google Sheets API using service account credentials."""
        try:
            # Define the scope
            scope = [
                'https://spreadsheets.google.com/feeds',
                'https://www.googleapis.com/auth/drive'
            ]
            
            # Load credentials from service account file
            credentials = Credentials.from_service_account_file(
                self.credentials_file, 
                scopes=scope
            )
            
            # Authorize the client
            self.client = gspread.authorize(credentials)
            logger.info("Successfully authenticated with Google Sheets API")
            
        except Exception as e:
            logger.error(f"Authentication failed: {str(e)}")
            raise
    
    def convert_date_format(self, date_string: str) -> str:
        """
        Convert date format using regex pattern.
        
        Args:
            date_string (str): Date string to convert
            
        Returns:
            str: Converted date string in MM/DD/YYYY format
        """
        if not date_string or not isinstance(date_string, str):
            return date_string
        
        # Regex pattern to match dates in various formats
        # Matches: MM/DD/YYYY, MM-DD-YYYY, M/D/YYYY, M-D-YYYY
        pattern = r'((?<!\d)\d{0,2})[/-]((?<!\d)\d{0,2})[/-](\d{4})'
        
        match = re.search(pattern, date_string)
        if match:
            month = match.group(1)
            day = match.group(2)
            year = match.group(3)
            
            # Ensure month and day are zero-padded if needed
            month = month.zfill(2)
            day = day.zfill(2)
            
            # Validate month and day ranges
            if 1 <= int(month) <= 12 and 1 <= int(day) <= 31:
                return f"{month}/{day}/{year}"
        
        return date_string
    
    def update_column_dates(self, spreadsheet_id: str, column_position: int, 
                           sheet_name: Optional[str] = None) -> bool:
        """
        Update date formats in a specific column of a Google Sheet.
        
        Args:
            spreadsheet_id (str): The ID of the Google Sheet
            column_position (int): Column position (1-based index)
            sheet_name (str, optional): Name of the specific sheet. If None, uses first sheet
            
        Returns:
            bool: True if successful, False otherwise
        """
        try:
            # Open the spreadsheet
            spreadsheet = self.client.open_by_key(spreadsheet_id)
            
            # Get the worksheet
            if sheet_name:
                worksheet = spreadsheet.worksheet(sheet_name)
            else:
                worksheet = spreadsheet.get_worksheet(0)
            
            if not worksheet:
                logger.error("Worksheet not found")
                return False
            
            # Get all values from the specified column
            column_letter = self._get_column_letter(column_position)
            column_range = f"{column_letter}:{column_letter}"
            
            # Get all values in the column
            column_values = worksheet.get(column_range)
            
            if not column_values:
                logger.warning(f"No data found in column {column_letter}")
                return True
            
            # Convert dates and prepare updates
            updates = []
            for row_idx, cell_value in enumerate(column_values, start=1):
                if cell_value and len(cell_value) > 0:
                    original_value = cell_value[0] if isinstance(cell_value, list) else cell_value
                    converted_value = self.convert_date_format(str(original_value))
                    
                    if converted_value != original_value:
                        updates.append({
                            'range': f"{column_letter}{row_idx}",
                            'values': [[converted_value]]
                        })
                        logger.info(f"Row {row_idx}: {original_value} -> {converted_value}")
            
            # Batch update the sheet
            if updates:
                worksheet.batch_update(updates)
                logger.info(f"Successfully updated {len(updates)} date values in column {column_letter}")
            else:
                logger.info("No date conversions needed")
            
            return True
            
        except Exception as e:
            logger.error(f"Error updating column dates: {str(e)}")
            return False
    
    def _get_column_letter(self, column_number: int) -> str:
        """
        Convert column number to letter (1 = A, 2 = B, etc.).
        
        Args:
            column_number (int): Column number (1-based)
            
        Returns:
            str: Column letter
        """
        result = ""
        while column_number > 0:
            column_number -= 1
            result = chr(65 + (column_number % 26)) + result
            column_number //= 26
        return result
    
    def preview_column_dates(self, spreadsheet_id: str, column_position: int,
                           sheet_name: Optional[str] = None) -> List[dict]:
        """
        Preview date conversions without making changes.
        
        Args:
            spreadsheet_id (str): The ID of the Google Sheet
            column_position (int): Column position (1-based index)
            sheet_name (str, optional): Name of the specific sheet
            
        Returns:
            List[dict]: List of conversion previews
        """
        try:
            # Open the spreadsheet
            spreadsheet = self.client.open_by_key(spreadsheet_id)
            
            # Get the worksheet
            if sheet_name:
                worksheet = spreadsheet.worksheet(sheet_name)
            else:
                worksheet = spreadsheet.get_worksheet(0)
            
            if not worksheet:
                logger.error("Worksheet not found")
                return []
            
            # Get all values from the specified column
            column_letter = self._get_column_letter(column_position)
            column_range = f"{column_letter}:{column_letter}"
            
            # Get all values in the column
            column_values = worksheet.get(column_range)
            
            if not column_values:
                return []
            
            # Preview conversions
            previews = []
            for row_idx, cell_value in enumerate(column_values, start=1):
                if cell_value and len(cell_value) > 0:
                    original_value = cell_value[0] if isinstance(cell_value, list) else cell_value
                    converted_value = self.convert_date_format(str(original_value))
                    
                    if converted_value != original_value:
                        previews.append({
                            'row': row_idx,
                            'original': original_value,
                            'converted': converted_value,
                            'cell': f"{column_letter}{row_idx}"
                        })
            
            return previews
            
        except Exception as e:
            logger.error(f"Error previewing column dates: {str(e)}")
            return []


def main():
    """
    Example usage of the GoogleSheetDateConverter class.
    """
    # Configuration
    CREDENTIALS_FILE = "service-account-credentials.json"
    SPREADSHEET_ID = "1fBkz61OB0-ZDjIb6EzCNQN3gV5GQGwdpR-DZyV5H7QY"
    COLUMN_POSITION = 2  # Column C (3rd column)
    SHEET_NAME = "Overall Waste"  # Optional: specific sheet name
    
    try:
        # Initialize the converter
        converter = GoogleSheetDateConverter(CREDENTIALS_FILE)
        
        # Preview changes before making them
        print("Previewing date conversions...")
        previews = converter.preview_column_dates(SPREADSHEET_ID, COLUMN_POSITION, SHEET_NAME)
        
        if previews:
            print(f"\nFound {len(previews)} dates to convert:")
            for preview in previews:
                print(f"Row {preview['row']}: {preview['original']} -> {preview['converted']}")
            
            # Ask for confirmation
            response = input("\nDo you want to proceed with the updates? (y/n): ")
            if response.lower() == 'y':
                # Update the column
                success = converter.update_column_dates(SPREADSHEET_ID, COLUMN_POSITION, SHEET_NAME)
                if success:
                    print("Successfully updated the spreadsheet!")
                else:
                    print("Failed to update the spreadsheet.")
            else:
                print("Update cancelled.")
        else:
            print("No date conversions needed.")
            
    except Exception as e:
        print(f"Error: {str(e)}")


if __name__ == "__main__":
    main() 