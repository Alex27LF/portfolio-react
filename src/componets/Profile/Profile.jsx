import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";
import ButtonStyle from "../Buttons/ButtonStyle";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, {`I'm`} Alex</h1>
        <p className={styles.description}>
          Software Engineer with a solid foundation in programming and a great
          enthusiasm for backend and mobile development.
        </p>
        <div className={styles.buttons}>
          <ButtonStyle
            link="mailto:fabricio10.pc@gmail.com"
            text="Contact Me"
          />
          <ButtonStyle
            link="https://drive.google.com/file/d/1q3aq8eI2jD72DpgJ40ALyMe4rcvpmgNa/view?usp=drive_link"
            text="Download CV"
          />
        </div>
      </div>
      <img
        src={getImageUrl("profile/icon.jpg")}
        alt="Profile Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
