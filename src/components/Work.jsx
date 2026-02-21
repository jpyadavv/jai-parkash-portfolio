import React, { useState } from "react";
import { projects } from "../constants";
import Section from "./Section";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModel = () => {
    setSelectedProject(null);
  };

  return (
    <Section>
    <section
      id="work"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className="border border-white bg-gray-900 rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[95%] max-w-2xl p-6 relative">
            <button
              onClick={handleCloseModel}
              className="absolute top-4 right-4 text-white text-2xl hover:text-purple-500"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#251f38] text-xs text-purple-400 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {selectedProject.live && (
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                View Live
              </a>
            )}
          </div>
        </div>
      )}
    </section>
    </Section>
  );
};

export default Work;