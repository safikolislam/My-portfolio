import React from 'react';

const AboutMe = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="bg-gray-50 py-16 px-6"
      id="about"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Hello! I'm <span className="font-semibold text-blue-600">Safikol Islam</span>,
            a passionate and dedicated web developer.My programming journey began with curiosity — I started exploring how websites work,
            and soon I found myself deeply interested in creating clean, interactive, and
            user-friendly web experiences.
          </p>

          <p>
            My development journey started by learning
            <span className="font-semibold text-blue-600"> HTML, CSS, and JavaScript</span> from
            YouTube tutorials. After learning these topics, I built several small projects. To strengthen my
            foundation, I enrolled in the
            <span className="font-medium"> Programming Hero (Level-1)</span> course,
            where I learned to build responsive and interactive websites using modern web technologies.
          </p>

          <p>
            Through the course, I gained valuable experience in
            <span className="font-semibold"> frontend development, problem-solving, and teamwork</span>.
            I'm always trying to continuously learn new technologies and improve my coding skills.
            My next goal is to explore
            <span className="font-semibold text-blue-600"> Next.js</span> and other advanced web development
            tools to create better user experiences.
          </p>

          <p>
            Outside of programming, I'm someone who enjoys
            <span className="font-semibold"> playing sports</span>, listening to
            <span className="font-semibold"> music</span>, and occasionally sketching ideas
            that inspire my designs. I believe creativity outside of coding helps me think differently
            when solving technical problems.
          </p>

          <p className="font-medium text-gray-800">
            I'm always excited to collaborate, learn, and grow as a developer —
            building something meaningful one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

