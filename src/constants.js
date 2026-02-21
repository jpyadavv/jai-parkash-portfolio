// ================= SKILLS =================

// Frontend Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

// Programming / CS
import javaLogo from "./assets/tech_logo/java.png";

// Tools Logos
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

// ---------- SKILLS ----------
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "REST API", logo: javascriptLogo }, // frontend API integration
    ],
  },
  {
    title: "Programming & CS Fundamentals",
    skills: [
      { name: "Java (Core)", logo: javaLogo },
      { name: "OOPs Concepts", logo: javaLogo },
      { name: "DSA (Basics)", logo: javaLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

// ---------- EXPERIENCE ----------
export const experiences = [
  {
    id: 0,
    role: "Frontend Developer Intern",
    company: "WebBlaze Softtech",
    date: "June – September 2025 (4 Months)",
    desc:
      "Worked as a Frontend Developer Intern for 4 months, building responsive and scalable UI components using React.js and Tailwind CSS. Focused on clean UI, component reusability, and modern frontend development practices.",
    skills: ["React JS", "Tailwind CSS"],
  },
];

// ================= PROJECTS =================
export const projects = [
  {
    id: 0,
    title: "Zentronix",
    description:
      "A responsive company website developed during internship using React.js and Tailwind CSS. Built reusable components with a focus on clean UI and responsiveness.",
    tags: ["React JS", "Tailwind CSS"],
    live: "https://zentronix-build.netlify.app",
    source: "Internship Project",
  },
  {
    id: 1,
    title: "Data Scientist Portfolio Website",
    description:
      "A professional portfolio website built using React.js and external CSS. Focused on clean layout, structured components, and responsive design.",
    tags: ["React JS", "External CSS"],
    live: "https://singular-licorice-859bf3.netlify.app/",
    source: "Internship Project",
  },
];

// ================= EDUCATION =================
export const education = [
  {
    id: 0,
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    college: "Radharaman College, Bhopal",
    duration: "2022 – 2025",
    description:
      "Successfully completed B.Tech in Computer Science Engineering with a strong focus on frontend development, data structures, and core programming concepts."
  },
];