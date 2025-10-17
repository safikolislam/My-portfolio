import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
     <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300  to-blue-400">
  Safikol
</div>

        
       
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
<li>
  <a
    href="#Education"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
    Education
  </a>
</li>
<li>
  <a
    href="#Skill"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
    Skill
  </a>
</li>
<li>
  <a
    href="#Projects"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
    Projects
  </a>
</li>
<li>
  <a
    href="#Contact"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
   Contact
  </a>
</li>


       
        </ul>

    
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

   
      {isOpen && (
        <ul className="md:hidden bg-white/30 backdrop-blur-md px-6 py-4 space-y-4 text-gray-800 font-medium">
         <li>
  <a
    href="#Education"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
    Education
  </a>
</li>
<li>
  <a
    href="#Skill"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
    Skill
  </a>
</li>
<li>
  <a
    href="#Projects"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
    Projects
  </a>
</li>
<li>
  <a
    href="#Contact"  
    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 
               hover:from-blue-400 hover:to-purple-400 
               cursor-pointer transition-all duration-300 transform hover:scale-110 font-semibold text-lg"
  >
   Contact
  </a>
</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

