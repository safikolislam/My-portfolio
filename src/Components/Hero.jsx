import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import img from "../assets/Safikol_islam_profile.png";
import resumePDF from "../assets/SAFIKOL-ISLAM.pdf";

const Hero = () => {
  const roles = [
    "MERN Stack Developer",
    "React.js Specialist",
    "Express.js Enthusiast",
    "Frontend Architect",
  ];

  return (
    <section
      id="home"
      className="mt-44 flex items-center font-sans overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* ===== Left Text Section ===== */}
          <div
            className="md:w-1/2 text-center md:text-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Hi, I'm <span className="text-blue-400">Safikol Islam</span>
            </h2>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-gray-800"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              A Passionate <br />
              <span className="text-cyan-300 border-b-4 border-cyan-500 min-h-[50px] inline-block">
                <Typewriter
                  words={roles}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p
              className="mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              I specialize in building dynamic and responsive web applications
              using the MERN stack. My passion lies in crafting elegant
              front-end experiences with React.js and robust back-end
              services with Node.js and Express.js.
            </p>

            <a
              href={resumePDF}
              download="Safikol_Islam_Resume.pdf"
              className="whitespace-nowrap mt-5 inline-block w-40 px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white rounded font-semibold transform transition duration-300 hover:scale-110 hover:from-purple-400 hover:to-cyan-400 text-center shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Download Resume
            </a>
          </div>

          {/* ===== Right Image Section ===== */}
          <div
            className="md:w-1/2 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <img
                className="relative w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-2xl hover:scale-105 transition-transform duration-700"
                src={img}
                alt="Profile of Safikol Islam"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



