import React from "react";
import Section from "./Section";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <Section>
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          An overview of my professional experience and responsibilities.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col items-center gap-12">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-8 max-w-2xl w-full
                       transform transition-all duration-300
                       hover:-translate-y-2 hover:shadow-purple-500/40 hover:border-purple-500/40"
          >
            <h3 className="text-2xl font-semibold text-white">
              {experience.role}
            </h3>

            <p className="text-purple-400 text-lg mt-1">
              {experience.company}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              {experience.date}
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              {experience.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </Section>
  );
};

export default Experience;