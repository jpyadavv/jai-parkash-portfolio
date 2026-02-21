import React from "react";
import Section from "./Section";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <Section>
    <section
      id="skills"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16 bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-5 py-10 justify-between">
        {SkillsInfo.map((category, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={600}
            gyroscope
            className="w-full sm:w-[48%] mb-10"
          >
            <div
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 rounded-2xl
                         border border-white/10
                         transition-all duration-300
                         hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.45)]
                         hover:border-purple-500/40"
            >
              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills items */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2
                               border-2 border-gray-700 rounded-3xl
                               py-2 px-3 text-center
                               transition-all duration-200
                               hover:border-purple-500 hover:bg-purple-900/10"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
    </Section>
  );
};

export default Skills;