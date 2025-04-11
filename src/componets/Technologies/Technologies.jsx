import styles from "./Technologies.module.css";
import { getImageUrl } from "../../utils";
import technologiesData from "../../data/technologies.json";

export const Technologies = () => {
  const { technologies } = technologiesData;

  return (
    <section className={styles.container} id="technologies">
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.technology}>
            <img
              src={getImageUrl(`technologies/${tech.icon}`)}
              alt={tech.name}
              className={styles.technologyIcon}
            />
            <span className={styles.technologyName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
