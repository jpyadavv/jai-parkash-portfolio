import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Menu click handler
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      px-[7vw] lg:px-[20vw]
      ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-5 text-white">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          Jai
          <span className="text-[#8245ec]">/</span>
          Parkash
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/jpyadavv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/jai-parkash-83b3ab22a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl cursor-pointer text-[#8245ec]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer text-[#8245ec]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[72px] left-1/2 -translate-x-1/2 w-4/5
        bg-[#050414]/80 backdrop-blur-lg rounded-xl shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/jpyadavv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/jai-parkash-83b3ab22a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
