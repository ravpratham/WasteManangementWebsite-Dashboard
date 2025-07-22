import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions or want to get involved? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Our Address</h3>
                    <p className="text-gray-700">
                      B-1132, Tower B, 11th Floor,<br />
                      i-Thum, Sector 62, Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <a href="mailto:info@greendream.org" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
                      reach@greendream.foundation
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <a href="tel:+919910857735" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
                      +919910857735
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Office Hours</h2>
                <p>We don’t clock in and out — we work round the clock for Mother Earth</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                
                <form 
                  action="https://formsubmit.co/reach@greendream.foundation"
                  method="POST"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name <span className="text-error-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Your Email <span className="text-error-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject <span className="text-error-600">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                      <option value="Partnership Proposal">Partnership Proposal</option>
                      <option value="Donation Question">Donation Question</option>
                      <option value="Media Request">Media Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message <span className="text-error-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="input-field"
                      required
                    ></textarea>
                  </div>

                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn btn-primary px-6 py-3"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Location</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Visit our office to learn more about our initiatives and how you can contribute.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-2 h-[400px] relative overflow-hidden">
            {/* Google Maps Embed for Green Dream Foundation Location */}
            <iframe
              title="Green Dream Foundation Location"
              src="https://www.google.com/maps?q=28.6272735,77.3725033&hl=es;z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350, borderRadius: 8 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;