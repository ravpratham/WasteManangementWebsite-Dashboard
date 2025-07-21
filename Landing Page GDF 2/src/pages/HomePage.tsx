import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Calendar, BarChart2, BookOpen, HandshakeIcon, Info } from 'lucide-react';
import { projectsData } from '../data/projectsData';
// import { statsData } from '../data/statsData';
// @ts-ignore
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show only featured projects on homepage
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={true}
          interval={3000}
          className="w-full h-full absolute inset-0 z-0"
        >
          <div>
            <img src="/images/homePage_Carousal_photo1.jpeg" alt="Our Mission" style={{ opacity: 0.5, objectFit: 'cover', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo2.jpeg" alt="Dry Waste" style={{ opacity: 0.5, objectFit: 'cover', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo3.jpeg" alt="Green Graffiti" style={{ opacity: 0.5, objectFit: 'cover', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo4.jpeg" alt="School" style={{ opacity: 0.5, objectFit: 'cover', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo5.jpeg" alt="School" style={{ opacity: 0.5, objectFit: 'cover', objectPosition: '50% 24%', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo6.jpeg" alt="School" style={{ opacity: 0.5, objectFit: 'cover', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo7.jpeg" alt="School" style={{ opacity: 0.5, objectFit: 'cover', objectPosition: '50% 10%', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo8.jpeg" alt="School" style={{ opacity: 0.5, objectFit: 'cover', width: '100%', height: '80vh' }} />
          </div>
          <div>
            <img src="/images/homePage_Carousal_photo9.jpeg" alt="School" style={{ opacity: 0.5, objectFit: 'cover', objectPosition: '50% 25%', width: '100%', height: '80vh' }} />
          </div>
        </Carousel>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            Creating a Sustainable Future <br className="hidden md:block" />
          </h1>
          <p className="text-xl md:text-2xl text-black">
          Live Your Green Dream with us by creating a Sustainable & Circular future
          </p>
          <p className="text-xl md:text-2xl text-black">where every small step leads to an meaningful and measurable impact</p>
          
          <div className="mt-10 flex flex-wrap gap-8 justify-center">
            <Link to="/projects" className="btn bg-primary-700 text-white hover:bg-primary-900 px-6 py-3 rounded-md font-bold transition-all duration-300">
              Explore Our Projects
            </Link>
            <Link to="/contact" className="btn bg-primary-700 text-white hover:bg-primary-900 px-6 py-3 rounded-md font-bold transition-all duration-300">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Looker Studio Dashboard Dropdown */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-md flex items-center"
              id="dashboard-menu-button"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {
                const menu = document.getElementById('dashboard-menu');
                if (menu) menu.classList.toggle('hidden');
              }}
            >
              Dashboards
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div
              id="dashboard-menu"
              className="hidden absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dashboard-menu-button"
            >
              <div className="py-1">
                <Link
                  to="/delhiNCRDashboard"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-100 hover:text-primary-700 text-lg font-medium rounded-t-md transition-colors duration-200"
                  role="menuitem"
                  onClick={() => {
                    const menu = document.getElementById('dashboard-menu');
                    if (menu) menu.classList.add('hidden');
                  }}
                >
                  Delhi NCR Dashboard
                </Link>
                <Link
                  to="/HisarDashboard"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-100 hover:text-primary-700 text-lg font-medium rounded-b-md transition-colors duration-200"
                  role="menuitem"
                  onClick={() => {
                    const menu = document.getElementById('dashboard-menu');
                    if (menu) menu.classList.add('hidden');
                  }}
                >
                  Hisar Dashboard
                </Link>
                <Link
                  to="/JajpurDashboard"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-100 hover:text-primary-700 text-lg font-medium rounded-b-md transition-colors duration-200"
                  role="menuitem"
                  onClick={() => {
                    const menu = document.getElementById('dashboard-menu');
                    if (menu) menu.classList.add('hidden');
                  }}
                >
                  Jajpur Dashboard
                </Link>
                <Link
                  to="/plantationDashboard"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-100 hover:text-primary-700 text-lg font-medium rounded-b-md transition-colors duration-200"
                  role="menuitem"
                  onClick={() => {
                    const menu = document.getElementById('dashboard-menu');
                    if (menu) menu.classList.add('hidden');
                  }}
                >
                  Plantation Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/homePage_OurMission.jpeg" 
                alt="Team working on waste management" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 mb-6">
              To nurture a sustainable world by restoring green cover through tree plantations, 
              transforming mindsets through environmental education, and promoting responsible waste management. 
              We strive to inspire conscious living and empower communities to become stewards of the Earth.
              </p>
              
              <Link to="/about" className="btn btn-primary inline-flex items-center">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Approach & Framework</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
            We follow the Triple Bottom Line (People, Planet, Prosperity) to guide all decisions, ensuring social, environmental, and financial sustainability. This approach helps us move beyond short-term fixes to create long-term, impactful solutions.
            </p>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Education</h3>
              <p className="text-gray-700">
              We spread environmental awareness through social media, events, and expert sessions, with workshops at TEDx, Ecothon, Smart Cities Expo, IIT Roorkee, E&Y, and Solar MENA.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <HandshakeIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Engagement</h3>
              <p className="text-gray-700">
              We reach 5+ million people monthly through social media and campaigns. Workshops, seminars, and volunteer efforts drive community change and impact.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Info className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Consultation</h3>
              <p className="text-gray-700">
              We offer end-to-end support for CSR and EPR implementation, enabling individuals, institutions, and corporations to adopt practical, environmentally sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore some of our impactful waste management initiatives that are making a difference in communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-2">
                      {project.status}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </span>
                    <Link to={`/projects`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/projects" className="btn btn-primary inline-flex items-center">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Impact in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.youtube.com/embed/LtT0UzgzKf0"
                title="YouTube video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg border-0"
              ></iframe>
            </div>
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.youtube.com/embed/TgymihemWbE"
                title="YouTube video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg border-0"
              ></iframe>
            </div>
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.youtube.com/embed/Nj0BZYKoYHc"
                title="YouTube video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Partners</h2>
            <p className="text-l mb-8">
              We are grateful to our partners for their support and collaboration in achieving our mission.
            </p>
            {/* Partners Images Horizontal Scroller */}
            <div className="relative w-full overflow-x-hidden">
              <div
                className="flex items-center gap-10 animate-partners-scroll"
                style={{ width: 'max-content' }}
              >
                {/* Repeat the images twice for seamless looping */}
                {[...Array(2)].map((_, idx) => (
                  <React.Fragment key={idx}>
                    <img src="https://www.jindalstainless.com/wp-content/uploads/2024/01/402546671_726835019468765_905049452957367908_n.jpg" alt="JSL" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GbN62KRgr3bE9NCbaRdIAawLmdDYIGdIVg&s" alt="Luminous" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://companieslogo.com/img/orig/FEDERALBNK.NS_BIG-37520d13.png?t=1720244491" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbI4pIPjoJHqF4p8o8oF4HSIdm3wYYBOjMQ&s" alt="CII/IPP" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_IDFC_First_Bank.svg/2560px-Logo_of_IDFC_First_Bank.svg.png" alt="IDFC First Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRric0VODcvFJkEWekuI43zg6Ebh54bXlMDlw&s" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMuM2r6hzBBZEKWEwSLdNaWZBdJ6kkLqWng&s" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://mcchandigarh.gov.in/assets/img/logo.png" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://content.jdmagicbox.com/v2/comp/delhi/s9/011pxx11.xx11.130225171344.q9s9/catalogue/north-delhi-municipal-corporation-ito-delhi-government-organisations-31appmw.jpg" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://getvectorlogo.com/wp-content/uploads/2019/03/dcm-shriram-vector-logo.png" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://pbs.twimg.com/profile_images/1611407338858250240/6Bf5Rh6v_400x400.jpg" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://pbs.twimg.com/profile_images/1540281047006715904/iCbJ4YwF_400x400.jpg" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEbe4tBeAe8Lg/company-logo_200_200/company-logo_200_200/0/1683819978348/lucroplastecycle_logo?e=2147483647&v=beta&t=25lxN_CZrzl_gBW9kKbQJe3fE4Gsmz9iouzGAwmC52w" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://mma.prnewswire.com/media/1471872/Blue_Planet_Environmental_Solutions_Logo_Logo.jpg?p=facebook" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/10/Patna_Municipal_Corporation_Logo.png" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://bbnda.in/Images/ludhianaheader.png" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Seal_of_Uttarakhand.svg/1200px-Seal_of_Uttarakhand.svg.png" alt="Federal Bank" className="h-24 w-40 object-contain transition duration-300 rounded-lg" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;