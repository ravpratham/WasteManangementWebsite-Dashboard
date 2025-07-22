import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openBioIndex, setOpenBioIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Ashish Sachdeva',
      role: 'Founder & President',
      image: '/images/aboutPage_Ashish.jpeg',
      bio: "I’m Ashish Sachdeva, President and a founding member of Green Dream Foundation. An engineer by degree, I chose to follow my passion for the environment—transforming ideas into impact. What began as a shared vision among a few changemakers has grown into a powerful movement for environmental action and awareness. At Green Dream, I focus on driving our mission forward—designing impactful programs, building partnerships, mobilizing communities, and inspiring collective responsibility for our planet. For me, this work is not just about conservation—it's about creating a future where sustainability is a way of life, accessible to all."
    },
    {
      name: 'Shweta Pandey',
      role: 'Exec. Vice President',
      image: '/images/aboutPage_Shweta.jpeg',
      bio: "I’m Shweta Pandey, Executive Vice President of Green Dream Foundation. Since the beginning, I’ve been deeply committed to building an organization that blends purpose with action—working at the intersection of people and the planet. At Green Dream, I lead our people strategy, foster cross-functional collaboration, and ensure our team stays grounded in compassion and sustainability. My journey here is driven by a simple belief: lasting environmental change starts with empowered individuals and united communities."
    },
    {
      name: 'Sharad Yadav',
      role: 'Associate Manager',
      image: '/images/aboutPage_Sharad.jpeg',
      bio: 'Myself Sharad Yadav, Associate Manager - Programs for Sustainable Waste Management. I drive initiatives promoting environmental stewardship and community well-being through sustainable waste management, greenery initiatives, and community empowerment. I lead cross-functional teams and create awareness among young minds about sustainability, inspiring a greener future.'
    },
    {
      name: 'Mamshad Ahmad',
      role: 'Associate Manager',
      image: '/images/aboutPage_Mamshad.jpg',
      bio: 'Environmentalist by choice, engineer by education, and a rural development enthusiast at heart. With a background in engineering and a master’s in Sustainable Rural Management, I work at the intersection of technology, community, and climate action. At Green Dream Foundation, I manage programs that turn green ideas into ground realities, lead initiatives that create lasting impact on both people and the planet.'
    },
    {
      name: 'Renu Sihag',
      role: 'Associate Manager',
      image: '/images/aboutPage_Renu.jpeg',
      bio: 'I have been associated with Green Dream Foundation for the past five years, contributing actively to various environmental initiatives. With a Master’s degree in Social Work, my passion lies in promoting sustainable practices that help protect and preserve our environment. Currently, I serve as the Associate Manager at our Hisar location, where I lead and implement impactful projects aimed at creating a cleaner, greener future.'
    },
    {
      name: 'Monika Jagariya',
      role: 'Community Mobiliser',
      image: '/images/aboutPage_Monika.JPG',
      bio: 'Myself Monika Jagriya, Community Mobilizer - Programs for Sustainable Waste Management. I drive initiatives promoting environmental stewardship and community well-being through sustainable waste management, greenery initiatives, and community empowerment. I lead on-ground efforts and create awareness among young minds about sustainability, inspiring a greener and more responsible future.'
    },
    {
      name: 'Deepak Yadav',
      role: 'Sr. Community Mobiliser',
      image: '/images/aboutPage_Deepak.jpg',
      bio: 'I am Deepak Yadav, and I have been associated with Green Dream Foundation for the past nine months, actively contributing to a range of environmental initiatives. I hold a Master’s degree in Disaster Management with a specialization in the technology for disaster management. I am deeply committed to promoting the democratization of technology to encourage more sustainable practices. Currently, I work as a Senior Community Mobilizer in Hisar, where I engage closely with communities to align their behaviour and attitudes with the project’s goals of adopting sustainable waste management practices.'
    },
    {
      name: 'Deepa Ray',
      role: 'Community Mobiliser',
      image: '/images/aboutPage_Deepa.jpeg',
      bio: 'I am currently associated with Green Dream Foundation, where I actively contribute to a range of environmental and sustainability-focused initiatives. Holding a Master’s degree in Disaster Management, I am deeply committed to risk reduction, climate resilience, and the promotion of sustainable practices that protect and preserve our environment. In my current role as a Community Mobilizer in Hisar, I lead the planning and implementation of impactful community-based projects aimed at fostering a cleaner and greener future.'
    },
    {
      name: 'Sasmita Moharana',
      role: 'Community Mobiliser',
      image: '/images/aboutPage_Sasmita.jpeg',
      bio: "As a Community Mobilizer at Green Dream Foundation, I've worked on waste management projects for three years, focusing on door-to-door collection, awareness, and education. I've collaborated with schools, local shops, and communities to promote eco-friendly habits and proper waste management, finding it rewarding to educate kids and contribute to a cleaner environment."
    },
    {
      name: 'Susmita Puhan',
      role: 'Sr. Community Mobiliser',
      image: '/images/aboutPage_Sushmita.jpeg',
      bio: "I'm Susmita Puhan, leading a team of members at Green Dream Foundation's waste management project in Jajpur district's Danagadi block. Our initiatives include door-to-door waste collection, awareness programs, and clean-up drives in Solei, Singagadia, and Danagadi areas. I find this work fulfilling and am committed to making a positive impact through sustainable waste management practices."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl">
          Learn about Green Dream Foundation, our mission, history, and the dedicated team working to revolutionize environmental conservation and upgradation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-700 mb-4">
              Green Dream Foundation was established in 2011 by a group of young environmental enthusiasts and community activists who saw the growing environmental crisis in both urban and rural areas. What began as a small initiative in one community has grown into a multi-faceted organization tackling climate challenges across the country.
              </p>
              <p className="text-gray-700 mb-4">
              Our founders recognized that effective waste management isn't just an environmental issue—it's a public health concern, an opportunity to generate dignified livelihoods, and a social justice imperative. This holistic understanding continues to guide our approach today.
              </p>
              <p className="text-gray-700">
              Over the years, we've expanded from basic waste collection to implementing innovative & integrated recycling programs, tree plantation drives to development of mini forests, reviving water bodies, conducting waste audits, developing experiential educational initiatives, and advising local governments on environment and sustainability policies.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="images/aboutPage_OurStory.jpeg" 
                alt="Green Dream Foundation Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-center rounded-lg shadow-md p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">Our Mission & Values</h3>
            <p className="text-gray-700 text-lg mb-0">
            At Green Dream Foundation, we are a passionate team of changemakers united by one mission: to heal and protect Mother Earth. Coming from diverse backgrounds—engineering, social work, social sciences, environmental studies, and beyond—we bring together technical expertise, grassroots understanding, and innovative thinking.
            </p>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sustainability</h3>
              <p className="text-gray-700">
                We design solutions that are environmentally sound, economically viable, and socially equitable for long-term impact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Empowerment</h3>
              <p className="text-gray-700">
                We believe that lasting change happens when communities are equipped with knowledge, resources and leadership skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-700">
                We constantly seek creative, data-driven approaches to waste management challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparency</h3>
              <p className="text-gray-700">
                We operate with honesty and openness, sharing our successes, challenges, and learnings with all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Team</h2>
            <p className="text-gray-700">
            At Green Dream Foundation, we are a passionate team of changemakers united by one mission: to heal and protect Mother Earth. Coming from diverse backgrounds—engineering, social work, social sciences, environmental studies, and beyond—we bring together technical expertise, grassroots understanding, and innovative thinking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                {member.name === 'Mamshad Ahmad, Shweta Pandey' ? (
                  <div style={{ overflow: 'hidden', width: '100%', height: '224px' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: '100%', height: '224px', objectFit: 'cover', objectPosition: '50% 40%', transform: 'scale(1.2)' }}
                    />
                  </div>
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-56 object-cover ${['Ashish Sachdeva','Sharad Yadav', 'Susmita Puhan','Sasmita Moharana'].includes(member.name) ? 'object-top' : 'object-center'}`}
                  />
                )}
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <button
                    className="btn btn-primary mb-2 px-4 py-1 text-sm"
                    onClick={() => setOpenBioIndex(index)}
                  >
                    Bio
                  </button>
                  {/* Modal Popup for Bio */}
                  {openBioIndex === index && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-12 relative text-center">
                        <button
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                          onClick={() => setOpenBioIndex(null)}
                        >
                          &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-primary-700">{member.name}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed" style={{ maxHeight: '400px', overflowY: 'auto' }}>{member.bio || 'No bio available.'}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Whether you want to volunteer, partner with us, or support our work financially, there are many ways to contribute to our mission.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition-all duration-300 inline-flex items-center">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
