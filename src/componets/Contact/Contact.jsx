import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contacto</h2>
      <div className={styles.content}>
        <div className={styles.contactCard}>
          <div className={styles.contactHeader}>
            <h3>¡Hablemos!</h3>
            <p>Estoy disponible para colaboraciones y oportunidades</p>
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
                  <span className={styles.linkValue}>Alex Fabricio Pachacama</span>
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
                  <span className={styles.linkValue}>Alex Fabricio Pachacama</span>
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
                  <span className={styles.linkValue}>Alex Fabricio Pachacama</span>
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