import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import experienceData from "../../data/experience.json";

export const Experience = () => {
  const { experiences } = experienceData;

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experiences}>
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`${styles.experience} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.experienceImage}>
              <img
                src={getImageUrl(`experience/${experience.image}`)}
                alt={experience.company}
                className={styles.companyImage}
              />
            </div>
            <div className={styles.experienceContent}>
              <h3 className={styles.companyName}>{experience.company}</h3>
              <p className={styles.position}>{experience.position}</p>
              <p className={styles.period}>{experience.period}</p>
              <p className={styles.description}>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 