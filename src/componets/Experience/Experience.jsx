import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const experiences = [
    {
      company: "Pacusoft S.A.S.",
      position: "Software Engineer",
      period: "feb 2024 - Present",
      duration: "",
      description:
        "Leading development of enterprise-level applications using React and Node.js. Implementing microservices architecture and cloud solutions.",
      image: "experience/pacusoft.png",
    },
    {
      company: "Corporación Wolf S.A.",
      position: "Backend de Facturación Electrónica",
      period: "feb 2023 - ago 2023",
      duration: "6 meses",
      description:
        "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams on large-scale projects.",
      image: "experience/wolf.png",
    },
    {
      company: "Corporación Wolf S.A.",
      position: "Desarrollador Full-Stack en el Sistema de Logística de Paquetería Quibox",
      period: "sep 2022 - nov 2022",
      duration: "240 horas",
      description:
        "Worked on front-end development using React and Redux. Participated in agile development processes and code reviews.",
      image: "experience/wolf.png",
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experiences}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experience}>
            <div className={styles.experienceImage}>
              <img
                src={getImageUrl(experience.image)}
                alt={experience.company}
                className={styles.companyImage}
              />
            </div>
            <div className={styles.experienceContent}>
              <h3 className={styles.companyName}>{experience.company}</h3>
              <h4 className={styles.position}>{experience.position}</h4>
              <div className={styles.period}>
                <span>{experience.period}</span>
              </div>
              <p className={styles.description}>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 