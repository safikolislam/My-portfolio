import React from 'react';
import { GraduationCap } from 'lucide-react'; 

const Education = () => {
  return (
    <section data-aos="fade-up"
     data-aos-duration="3000" id="Education" className="bg-gray-100 py-16 px-6" >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 flex justify-center items-center gap-3">
          <GraduationCap className="text-blue-500 w-8 h-8" />
          Education
        </h2>

        <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 text-left hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">
            Bachelor of Science (B.Sc.)
          </h3>
          <p className="text-blue-600 font-medium mt-1">
            Major: Mathematics, Physics, and Botany
          </p>
          <p className="text-gray-600 mt-2">
            Narsingdi Govt. College
          </p>
          <p className="text-gray-500 mt-1 italic">2nd Year (Running)</p>
          <p className="text-gray-500 mt-4">
            Expected Graduation: <span className="font-medium">2027</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

