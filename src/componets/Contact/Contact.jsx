import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <div className={styles.profileColumn}>
          <img src={getImageUrl("profile/profile3.png")} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.contactCard}>
          <div className={styles.contactHeader}>
            <h3>{`Let's talk!`}</h3>
            <p>I am available for collaborations and opportunities.</p>
          </div>
          <div className={styles.contactLinks}>
            <a
              href="mailto:fabricio10.pc@gmail.com"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.linkContent}>
                <img
                  src={getImageUrl("technologies/gmail.png")}
                  alt="Email"
                  className={styles.linkIcon}
                />
                <div className={styles.linkInfo}>
                  <span className={styles.linkTitle}>Email</span>
                </div>
              </div>
              <div className={styles.linkArrow}>→</div>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-fabricio/"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.linkContent}>
                <img
                  src={getImageUrl("technologies/linkedin.svg")}
                  alt="LinkedIn"
                  className={styles.linkIcon}
                />
                <div className={styles.linkInfo}>
                  <span className={styles.linkTitle}>LinkedIn</span>
                </div>
              </div>
              <div className={styles.linkArrow}>→</div>
            </a>
            <a
              href="https://github.com/Alex27LF"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.linkContent}>
                <img
                  src={getImageUrl("technologies/github.svg")}
                  alt="GitHub"
                  className={styles.linkIcon}
                />
                <div className={styles.linkInfo}>
                  <span className={styles.linkTitle}>GitHub</span>
                </div>
              </div>
              <div className={styles.linkArrow}>→</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 