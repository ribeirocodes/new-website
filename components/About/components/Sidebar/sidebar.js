
import styles from "./sidebar.module.scss";

import linkedin from '/public/images/icons/linkedin.svg';
import github from '/public/images/icons/github.svg';
import twitter from '/public/images/icons/twitter.svg';
import resume from '/public/images/icons/resume.svg';
import email from '/public/images/icons/email.svg';
import location from '/public/images/icons/location.svg';

export default function Sidebar() {
  return (
    <aside className={styles.about__sidebar}>
      <h2 className={
        styles.about__title}>about</h2>

      <p className={styles.about__location}>
        <img src={location.src} alt="" />
        São Paulo, Brazil.
      </p>

      <nav className={styles.about__link}>
        <a data-cursor href="#" className={styles.about__linksItem}>
          <img src={linkedin.src} alt="" />LinkedIn
        </a>
        <a data-cursor href="#" className={styles.about__linksItem}>
          <img src={github.src} alt="" />Github
        </a>
        <a data-cursor href="#" className={styles.about__linksItem}>
          <img src={twitter.src} alt="" />Twitter
        </a>
        <a data-cursor href="#" className={styles.about__linksItem}>
          <img src={resume.src} alt="" />Resume
        </a>

        <a data-cursor href="#" className={`${styles.about__linksItem} ${styles.about__linksItemEmail}`}
        >
          <img src={email.src}
            alt="" />hi@ribeiro.codes
        </a>
      </nav >
    </aside >
  )
}