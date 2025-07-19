import React, { useEffect, useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

const DelhiNCRDashboard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to track iframe loading
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Impact Dashboard</h1>
          <p className="text-xl max-w-3xl">
          A real-time window into our environmental initiatives — tracking progress, measuring impact, and driving sustainable change.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center w-full mx-auto mb-10 relative"
            style={{ aspectRatio: '16/9', width: '100%', height: '79vh', maxHeight: '79vh', overflow: 'hidden', minHeight: 0 }}
          >
            {/* Loader/Spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-600 border-solid"></div>
              </div>
            )}
            <iframe
              width="100%"
              height="100%"
              src="https://lookerstudio.google.com/embed/reporting/19fa0ee2-a5ab-4e57-a38d-dcb4463e30eb/page/9EKPF"
              style={{ border: 0, width: '100%', height: '100%', display: 'block', overflow: 'hidden' }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              title="Impact Dashboard"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DelhiNCRDashboard;