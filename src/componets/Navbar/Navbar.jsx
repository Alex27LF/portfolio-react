import { useState } from "react";

import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpen = isMenuOpen ? "open" : "";

  return (
    <div className={`container`}>
      <a className={`title`} href="/">
        {"Alek's"}
      </a>
      <div className="navbarItems">
        <button
          className={`burger ${isOpen}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></button>
        <div className={`background ${isOpen}`} />
        <div className={`menu ${isOpen}`}>
          <nav onClick={() => setIsMenuOpen(false)}>
            <a
              href="#about"
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.1s` }}
            >
              About me
            </a>
            <a
              href="#experience"
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.2s` }}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.3s` }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.4s` }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
