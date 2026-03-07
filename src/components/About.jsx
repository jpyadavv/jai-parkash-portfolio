import React from "react";
import Section from "./Section";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "/profile2.png";

const About = () => {
  return (
    <Section>
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Jai Parkash
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec]">
            <span className="text-white mr-2">I am a</span>
            <Typewriter
              words={["Web Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Frontend Developer with hands-on experience in building responsive
            and modern user interfaces using React.js. Strong understanding of
            component-based architecture, styling, and deployment.
          </p>

          <a
            href="https://drive.google.com/file/d/1Y_LKV7cGTomIz7pxlt-XxUM_I_93BhAm/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 10px #8245ec, 0 0 0px #8245ec, 0 0 20px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt className="w-48 h-48 sm:h-64 md:w-[25rem] md:h-[24rem] border-4 border-purple-700 rounded-full"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope
          >
            <img
              src={profileImage}
              alt="Jai Parkash"
              className="w-full h-full rounded-full object-cover  object-[28%_18%] 
              drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
    </Section>
  );
};

export default About;
