import React from "react";

const Skills = () => {
  const frontend = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "React JS", level: 80 },
  ];

  const backend = [
    { name: "Express JS", level: 75 },
  ];

  const tools = [
    { name: "Git & GitHub", level: 70 },
    { name: "VS Code", level: 85 },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 font-medium">{skill.name}</span>
        <span className="text-gray-600 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section  data-aos="fade-up"
     data-aos-duration="3000" className="bg-white mt-10 py-16 px-6" id="Skill">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
              Frontend
            </h3>
            {frontend.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Backend */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-6 text-center">
              Backend
            </h3>
            {backend.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-pink-600 mb-6 text-center">
              Tools
            </h3>
            {tools.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
