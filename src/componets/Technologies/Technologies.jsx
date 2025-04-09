import styles from "./Technologies.module.css";
import { getImageUrl } from "../../utils";

export const Technologies = () => {
  const technologies = [
    {
      name: "Scriptcase",
      icon: "scriptcase.png",
    },
    {
      name: "Kalipso Studio",
      icon: "kalipso.png",
    },
    {
      name: "Microsoft SQL Server",
      icon: "microsoftsqlserver.svg",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql.svg",
    },
    {
      name: "TypeScript",
      icon: "typescript.svg",
    },

    {
      name: "Flutter",
      icon: "flutter.svg",
    },

    {
      name: "React",
      icon: "react.svg",
    },
    {
      name: "Node.js",
      icon: "nodejs.svg",
    },
    {
      name: "Express",
      icon: "express.svg",
    },
    {
      name: "Insomnia",
      icon: "insomnia.svg",
    },
    {
      name: "GitHub",
      icon: "github.svg",
    },
  ];

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
