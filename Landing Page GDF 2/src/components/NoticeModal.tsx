import React, { useEffect, useState } from 'react';

interface NoticeModalProps {
  onAccept: () => void;
}

const NoticeModal: React.FC<NoticeModalProps> = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);

  // Prevent the website behind the modal from scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="flex h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">

        {/* Header */}
        <div className="border-b border-gray-200 px-5 py-4 sm:px-7 sm:py-5">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Important Notice
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Please read the following notice carefully before continuing.
          </p>
        </div>

        {/* PDF */}
        <div className="min-h-0 flex-1 bg-gray-100 p-2 sm:p-4">
          <div className="h-full w-full overflow-hidden rounded-lg border border-gray-300 bg-white">
            <iframe
              src="/notice.pdf"
              title="Important Notice"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-white px-5 py-4 sm:px-7 sm:py-5">
          <div className="flex flex-col items-center">

            {/* Checkbox */}
            <label className="flex cursor-pointer items-center justify-center gap-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="h-5 w-5 shrink-0 cursor-pointer accent-green-600"
              />

              <span className="text-sm leading-6 text-gray-700">
                I have read and understood the above notice.
              </span>
            </label>

            {/* Continue Button */}
            <button
              type="button"
              disabled={!isChecked}
              onClick={onAccept}
              className={`mt-4 rounded-lg px-8 py-3 text-sm font-semibold text-white transition-all duration-200 ${
                isChecked
                  ? 'bg-green-600 hover:bg-green-700 active:bg-green-800'
                  : 'cursor-not-allowed bg-gray-300'
              }`}
            >
              Continue
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default NoticeModal;