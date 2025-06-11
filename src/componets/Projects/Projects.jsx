import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  const { projects } = projectsData || {};

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.gridContainer}>
        {projects.map((project) => (
          <div key={project.title} className={styles.projectCard}>
            <div className={styles.projectImages}>
              <img
                src={getImageUrl(`projects/${project.image}`)}
                alt={`${project.title} - Image`}
                className={styles.projectImg}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSubTitle}>{project.subtitle}</p>
              <div className={styles.techIcons}>
                {project.technologies.map((tech) => (
                  <img
                    key={tech}
                    src={getImageUrl(`technologies/${tech}`)}
                    alt={tech}
                    title={tech}
                    className={styles.techIcon}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
