import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";
import ButtonStyle from "../Buttons/ButtonStyle";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, {`I'm`} Alex</h1>
        <p className={styles.description}>
          Software Engineer with a strong foundation in programming and a
          passion for backend and mobile development. Eager to collaborate on
          impactful projects, continuously grow as a developer, and gain
          hands-on experience in real-world environments.
        </p>
        <div className={styles.buttons}>
          <ButtonStyle
            link="mailto:fabricio10.pc@gmail.com"
            text="Contact Me"
          />
          <ButtonStyle
            link={getImageUrl("profile/CV Alex.pdf")}
            text="Download CV"
          />
        </div>
      </div>
      <img
        src={getImageUrl("profile/profile2.png")}
        alt="Profile Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
