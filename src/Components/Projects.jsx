import Pimage1 from '../assets/Screenshot 2025-10-17 103738.png'
import pimg2 from "../assets/Screenshot 2025-10-17 105904.png"
import Pimg3 from "../assets/Screenshot 2025-10-17 105225.png"
const Projects = () => {

  return (
    <section data-aos="fade-up"
     data-aos-duration="3000" id="Projects" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={Pimage1}
              alt="Medinest Healthcare Website preview"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Medinest Healthcare Website</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A modern healthcare service platform where users can book appointments, view doctors, and access health tips.
              </p>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">React</span>
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">Tailwind CSS</span>
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">Firebase</span>
              </div>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Challenges Faced</h4>
              <p className="text-gray-600 text-sm mb-4">
                Integrating Firebase authentication and dynamic routing between user and admin panels.
              </p>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Future Plans</h4>
              <p className="text-gray-600 text-sm mb-4">
                Add a patient dashboard with medical history tracking and AI-based symptom checker.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-200 flex gap-4">
                <a
                  href="https://courageous-vacherin-33de11.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-600"
                >
                  Live Project
                </a>
                <a
                  href="https://github.com/safikolislam/MediNest-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-800"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={pimg2}
              alt="EduSmart Learning App preview"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Car Rental</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                An e-learning platform for students to explore online courses and track progress with personalized dashboards.
              </p>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">React</span>
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">Node.js</span>
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">MongoDB</span>
              </div>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Challenges Faced</h4>
              <p className="text-gray-600 text-sm mb-4">
                Backend integration for course APIs and implementing secure login sessions.
              </p>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Future Plans</h4>
              <p className="text-gray-600 text-sm mb-4">
                Adding payment gateway integration and instructor analytics dashboard.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-200 flex gap-4">
                <a
                  href="https://sensational-shortbread-2fd55e.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-600"
                >
                  Live Project
                </a>
                <a
                  href="https://github.com/safikolislam/rentify-car"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-800"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={Pimg3}
              alt="Portfolio Website preview"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Recipe Book</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A sleek personal portfolio to showcase my projects, resume, and contact details.
              </p>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">React</span>
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">Tailwind CSS</span>
                <span className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">Framer Motion</span>
              </div>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Challenges Faced</h4>
              <p className="text-gray-600 text-sm mb-4">
                Making smooth animations and ensuring responsive design on all devices.
              </p>

              <h4 className="text-md font-semibold text-gray-700 mb-2">Future Plans</h4>
              <p className="text-gray-600 text-sm mb-4">
                Add a blog section and dark/light mode toggle.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-200 flex gap-4">
                <a
                  href="https://jocular-druid-402f46.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-600"
                >
                  Live Project
                </a>
                <a
                  href="https://github.com/safikolislam/client-recipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-800"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
