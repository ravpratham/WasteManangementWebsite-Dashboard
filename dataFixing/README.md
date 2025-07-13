# Google Sheets Date Converter

A Python tool to read Google Sheets and convert date formats using regex patterns. This tool can update date formats in specific columns of Google Sheets.

## Features

- Read Google Sheets using Google Sheets API
- Convert date formats using regex patterns
- Preview changes before applying them
- Batch update multiple cells efficiently
- Support for different date input formats (MM/DD/YYYY, MM-DD-YYYY, etc.)
- Comprehensive logging and error handling

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Google Sheets API Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API and Google Drive API
4. Create a Service Account:
   - Go to "IAM & Admin" > "Service Accounts"
   - Click "Create Service Account"
   - Give it a name and description
   - Grant "Editor" role
   - Create and download the JSON key file

### 3. Share Your Google Sheet

1. Open your Google Sheet
2. Click "Share" in the top right
3. Add your service account email (found in the JSON file) with "Editor" permissions

## Usage

### Basic Usage

```python
from google_sheet_date_converter import GoogleSheetDateConverter

# Initialize the converter
converter = GoogleSheetDateConverter("path/to/service-account-credentials.json")

# Update dates in column C (3rd column)
success = converter.update_column_dates(
    spreadsheet_id="your-spreadsheet-id",
    column_position=3,  # Column C
    sheet_name="Sheet1"  # Optional
)
```

### Preview Changes Before Applying

```python
# Preview what changes will be made
previews = converter.preview_column_dates(
    spreadsheet_id="your-spreadsheet-id",
    column_position=3
)

for preview in previews:
    print(f"Row {preview['row']}: {preview['original']} -> {preview['converted']}")
```

### Run the Example Script

```bash
python google_sheet_date_converter.py
```

## Date Format Conversion

The tool uses the following regex pattern to match dates:
```
((?<!\d)\d{0,2})[/-]((?<!\d)\d{0,2})[/-](\d{4})
```

This pattern matches:
- `MM/DD/YYYY` → `MM/DD/YYYY`
- `MM-DD-YYYY` → `MM/DD/YYYY`
- `M/D/YYYY` → `MM/DD/YYYY` (with zero-padding)
- `M-D-YYYY` → `MM/DD/YYYY` (with zero-padding)

### Examples:
- `12/25/2023` → `12/25/2023`
- `12-25-2023` → `12/25/2023`
- `1/5/2023` → `01/05/2023`
- `1-5-2023` → `01/05/2023`

## Configuration

Update the following variables in the `main()` function:

```python
CREDENTIALS_FILE = "path/to/your/service-account-credentials.json"
SPREADSHEET_ID = "your-spreadsheet-id-here"
COLUMN_POSITION = 3  # Column C (3rd column)
SHEET_NAME = "Sheet1"  # Optional: specific sheet name
```

## Error Handling

The tool includes comprehensive error handling:
- Authentication errors
- Invalid spreadsheet IDs
- Missing worksheets
- Network connectivity issues
- Invalid date formats

All errors are logged with detailed information.

## Security Notes

- Keep your service account credentials JSON file secure
- Never commit credentials to version control
- Use environment variables for sensitive data in production
- Regularly rotate service account keys

## License

This project is open source and available under the MIT License.
