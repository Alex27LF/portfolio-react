import { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projectsData from "../../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { projects } = projectsData;

  useEffect(() => {
    const timer = setInterval(() => {
      const currentProjectImages = projects[currentProject].images;
      setCurrentImageIndex((prev) => (prev + 1) % currentProjectImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentProject, projects]);

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const handleImagePrev = () => {
    const currentProjectImages = projects[currentProject].images;
    setCurrentImageIndex((prev) => (prev - 1 + currentProjectImages.length) % currentProjectImages.length);
  };

  const handleImageNext = () => {
    const currentProjectImages = projects[currentProject].images;
    setCurrentImageIndex((prev) => (prev + 1) % currentProjectImages.length);
  };

  const getVisibleDots = () => {
    const totalDots = projects.length;
    const maxVisibleDots = 5;
    const dots = [];

    if (totalDots <= maxVisibleDots) {
      return projects.map((_, index) => index);
    }

    let start = Math.max(0, currentProject - 2);
    let end = Math.min(totalDots - 1, start + maxVisibleDots - 1);

    if (end - start + 1 < maxVisibleDots) {
      start = Math.max(0, end - maxVisibleDots + 1);
    }

    for (let i = start; i <= end; i++) {
      dots.push(i);
    }

    return dots;
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.carousel}>
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.project} ${
                index === currentProject ? styles.active : ""
              }`}
            >
              <div className={styles.projectImage}>
                <img
                  src={getImageUrl(project.images[currentImageIndex])}
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.imageNavButtons}>
                  <button className={styles.imageNavButton} onClick={handleImagePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className={styles.imageNavButton} onClick={handleImageNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
                <div className={styles.overlay}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navigationContainer}>
        <button className={styles.navButton} onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.dots}>
          {getVisibleDots().map((index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentProject ? styles.active : ""
              }`}
              onClick={() => {
                setCurrentProject(index);
                setCurrentImageIndex(0);
              }}
            />
          ))}
        </div>
        <button className={styles.navButton} onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}; 