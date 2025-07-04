import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Calendar, BarChart2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
// import { statsData } from '../data/statsData';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show only featured projects on homepage
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Creating a Sustainable Future Through Waste Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Join Green Dream Foundation in our mission to transform waste management practices and build cleaner, healthier communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition-all duration-300">
                Explore Our Projects
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-md font-bold transition-all duration-300">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Looker Studio Dashboard Button */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          {/* <a
            href="https://lookerstudio.google.com/embed/reporting/6cb14e71-279d-4fcc-b3ad-ba8f7058ea06/page/9EKPF" // TODO: Replace with actual dashboard link
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-md"
          
            View Our Impact Dashboard
          </a> */}

          <Link to="/dashboard" className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-md">
            View Our Impact Dashboard
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="public\images\homePage_OurMission.jpg" 
                alt="Team working on waste management" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At Green Dream Foundation, we believe that effective waste management is the cornerstone of sustainable development. Our mission is to implement innovative waste collection and recycling programs that reduce environmental impact, create jobs, and improve community health.
              </p>
              <p className="text-gray-700 mb-8">
                Through education, community engagement, and partnerships with local governments, we're transforming how societies handle waste and building a cleaner future for generations to come.
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Approach</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We tackle waste management through a comprehensive approach that combines community engagement, data-driven solutions, and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Recycle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Waste Collection & Recycling</h3>
              <p className="text-gray-700">
                We implement efficient waste collection systems and sorting facilities to maximize recycling rates and minimize landfill waste.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Education</h3>
              <p className="text-gray-700">
                We educate communities about waste reduction, proper segregation, and sustainable consumption to create lasting behavioral change.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BarChart2 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Data-Driven Solutions</h3>
              <p className="text-gray-700">
                We collect and analyze waste data to optimize collection routes, identify improvement areas, and measure environmental impact.
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Partners</h2>
            <p className="text-l mb-8">
              We are grateful to our partners for their support and collaboration in achieving our mission.
            </p>
            {/* Partners Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 justify-items-center items-center mb-8">
              <img src="https://www.jindalstainless.com/wp-content/uploads/2024/01/402546671_726835019468765_905049452957367908_n.jpg" alt="JSL" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://media.licdn.com/dms/image/v2/C4E0BAQFFXRgsfsZImA/company-logo_200_200/company-logo_200_200/0/1630629047046/exhibitions_india_pvt_ltd_logo?e=2147483647&v=beta&t=Gu_u2VOZGdPbg4yacbtXt4lrZCL45yZiGsuqzDoaDpw" alt="Exhibitions India Group" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://static.wixstatic.com/media/51be94_ecec2f6a6a2d437797090a8c4dd2d26f~mv2.jpg/v1/fill/w_182,h_148,al_c,lg_1,q_80,enc_avif,quality_auto/51be94_ecec2f6a6a2d437797090a8c4dd2d26f~mv2.jpg" alt="EcoRight Bags" className="h-100 w-auto object-contain transition duration-300 rounded-lg " />
              <img src="https://static.wixstatic.com/media/51be94_3d4e9f3e3c074cc096b4226d12c1a485~mv2.png/v1/fill/w_280,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/51be94_3d4e9f3e3c074cc096b4226d12c1a485~mv2.png" alt="GRIHA Council" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-11730,resizemode-75,msid-87304710/news/india/centre-asks-media-organisations-to-display-logo-of-azadi-ka-amrit-mahotsav.jpg" alt="India@75" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GbN62KRgr3bE9NCbaRdIAawLmdDYIGdIVg&s" alt="Luminous" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://companieslogo.com/img/orig/FEDERALBNK.NS_BIG-37520d13.png?t=1720244491" alt="Federal Bank" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbI4pIPjoJHqF4p8o8oF4HSIdm3wYYBOjMQ&s" alt="CII/IPP" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_IDFC_First_Bank.svg/2560px-Logo_of_IDFC_First_Bank.svg.png" alt="IDFC First Bank" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://static.wixstatic.com/media/51be94_717d2d56acf742faaf27ce72c019c705~mv2.jpg/v1/fill/w_462,h_252,al_c,lg_1,q_80,enc_avif,quality_auto/51be94_717d2d56acf742faaf27ce72c019c705~mv2.jpg" alt="BeejPaper" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/24/WWF_logo.svg/1200px-WWF_logo.svg.png" alt="WWF" className="h-100 w-auto object-contain transition duration-300 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;