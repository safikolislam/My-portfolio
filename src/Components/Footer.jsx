import React from 'react';
import { FaGithub,  FaFacebook } from 'react-icons/fa';

const Footer = () => {
    
    const quickLinks = [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Services', url: '#services' },
        { name: 'Contact', url: '#contact' },
    ];

    return (
     
        <footer className="bg-gray-200 mt-5 text-black py-12"> 
            <div className="container mx-auto px-4">
                
             
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
                    
                  
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-3xl font-extrabold mb-2 text-blue-400">Safikol Islam</h1>
                        <p className="text-gray-400 mb-4">
                            Passionate **Frontend Developer** crafting seamless and user-friendly web experiences.
                        </p>
                        
                    
                        <div className="flex space-x-4">
                            <a href="https://github.com/safikolislam" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <FaGithub size={24} />
                            </a>
                       
                          
                            <a href="https://www.facebook.com/md.safikol.islam.ashik" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>

                  
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-black">Quick Links</h2>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.url} 
                                        className="text-gray-400 hover:text-blue-400 transition-colors block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-black">Get In Touch</h2>
                        <p className="text-gray-400 mb-2">Email: <a href="mailto:hello@example.com" className="hover:text-blue-400">safikolislam72@gmail.com</a></p>
                        <p className="text-gray-400 mb-2">Phone: +880 1881799990</p>
                        <p className="text-gray-400">Location: Narsingdi,Dhaka, Bangladesh</p>
                    </div>

                   
                   
                   
                </div>

               
                <div className="pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} **Safikol Islam**. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
