import React, { useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            className="text-center w-full mx-auto mb-10"
            style={{ aspectRatio: '16/9', width: '100%', height: '130vh', maxHeight: '130vh', overflow: 'hidden', minHeight: 0 }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://lookerstudio.google.com/embed/reporting/94f1cae6-9aaa-482c-b5ef-5287edf11e2e/page/9EKPF"
              style={{ border: 0, width: '100%', height: '100%', display: 'block', overflow: 'hidden' }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              title="Impact Dashboard"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;