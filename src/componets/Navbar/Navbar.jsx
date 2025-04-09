import { useState, useEffect } from "react";

import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isOpen = isMenuOpen ? "open" : "";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      setIsMenuOpen(false);
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`container ${isScrolled ? "scrolled" : ""}`}>
      <a className={`title`} href="/">
        {"Alek's"}
      </a>
      <div className="navbarItems">
        <button
          className={`burger ${isOpen}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className={`background ${isOpen}`} />
        <div className={`menu ${isOpen}`}>
          <nav onClick={() => setIsMenuOpen(false)}>
            <a
              href="#technologies"
              className={isMenuOpen ? "appear" : ""}
              style={{ "--i": 1 }}
              onClick={handleNavClick}
            >
              Technologies
            </a>
            <a
              href="#experience"
              className={isMenuOpen ? "appear" : ""}
              style={{ "--i": 2 }}
              onClick={handleNavClick}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={isMenuOpen ? "appear" : ""}
              style={{ "--i": 3 }}
              onClick={handleNavClick}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={isMenuOpen ? "appear" : ""}
              style={{ "--i": 4 }}
              onClick={handleNavClick}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
