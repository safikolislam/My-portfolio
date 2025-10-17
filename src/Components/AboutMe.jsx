import React from 'react';

const AboutMe = () => {
    return (
        <section data-aos="fade-up"
     data-aos-duration="3000" className="bg-gray-50 py-16 px-6" id="about">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                    <p>
                        Hello! I’m <span className="font-semibold text-blue-600">Safikol Islam</span>, 
                        a passionate and dedicated web developer currently pursuing my 
                        <span className="font-medium"> Bachelor’s degree in Computer Science</span>. 
                        My programming journey began with curiosity — I started exploring how websites work, 
                        and soon I found myself deeply interested in creating clean, interactive, and 
                        user-friendly web experiences.
                    </p>

                    <p>
                        Over time, I’ve developed strong skills in <span className="font-semibold text-blue-600">
                        HTML, CSS, JavaScript, React, and Tailwind CSS</span>. I enjoy turning ideas into reality 
                        through code, especially by building responsive, visually appealing interfaces. 
                        I’m constantly learning and love challenging myself with new technologies and projects.
                    </p>

                    <p>
                        I truly enjoy front-end development, but I’m also curious about full-stack web 
                        development and how everything connects behind the scenes. The process of transforming 
                        concepts into functional, elegant solutions gives me immense satisfaction.
                    </p>

                    <p>
                        Outside of programming, I’m someone who enjoys <span className="font-semibold">playing sports</span>, 
                        listening to <span className="font-semibold">music</span>, and occasionally sketching ideas 
                        that inspire my designs. I believe creativity outside of coding helps me think differently 
                        when solving technical problems.
                    </p>

                    <p className="font-medium text-gray-800">
                        I’m always excited to collaborate, learn, and grow as a developer — 
                        building something meaningful one line of code at a time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
