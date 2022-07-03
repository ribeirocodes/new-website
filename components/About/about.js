import styles from "./about.module.scss";
import Info from "./components/Info/info";
import Profile from "./components/Profile/profile";
import Sidebar from "./components/Sidebar/sidebar";

import chevron from '/public/images/icons/chevron.svg'

export default function About() {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    })
  };

  return (
    <section className={styles.about} id="about">

      <div onClick={scrollToAbout} className={styles.about__arrow}>
        <img src={chevron.src} />
      </div>

      <div className={styles.about__container}>
        <div className={styles.about__content}>
          <Sidebar />
          <Info />
        </div>

        <Profile />
      </div>
    </section>
  )
}