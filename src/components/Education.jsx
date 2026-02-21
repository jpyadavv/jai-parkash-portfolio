import React from "react";
import Section from "./Section";
import { education } from "../constants";

const Education = () => {
  return (
    <Section>
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic background and highest qualification.
        </p>
      </div>

      {/* Education Card */}
      <div className="flex justify-center">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-8 max-w-2xl w-full
                       transform transition-all duration-300
                       hover:-translate-y-2 hover:shadow-purple-500/40 hover:border-purple-500/40"
          >
            <h3 className="text-2xl font-semibold text-white">
              {edu.degree}
            </h3>

            <p className="text-purple-400 text-lg mt-1">
              {edu.field}
            </p>

            <p className="text-gray-300 mt-2">
              {edu.college}
            </p>

            <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
              <p className="text-sm text-gray-400">
                {edu.duration}
              </p>
              <span className="text-sm bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full">
                CGPA: 7.4
              </span>
            </div>

            <p className="text-gray-400 mt-4 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </Section>
  );
};

export default Education;