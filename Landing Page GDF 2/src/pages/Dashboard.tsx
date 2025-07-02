import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Ashish Sachdeva',
      role: 'Founder',
      image: '',
      bio: 'Ashish is a software engineer with a passion for environmental conservation. He is the founder of Green Dream Foundation and has been working to make a difference in the waste management industry for over 10 years.'
    },
    {
      name: 'Mamshad',
      role: '.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: '.'
    },
    {
      name: 'Monika',
      role: '',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: '.'
    },
    {
      name: 'Arin Gupta',
      role: 'Intern',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: '.'
    }
  ];

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

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center w-full mx-auto mb-12"
            style={{ aspectRatio: '16/9', height: 'auto', maxHeight: '100vh', overflow: 'hidden', minHeight: 0 }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://lookerstudio.google.com/embed/reporting/6cb14e71-279d-4fcc-b3ad-ba8f7058ea06/page/9EKPF"
              style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
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