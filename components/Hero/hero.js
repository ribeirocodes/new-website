import styles from './hero.module.scss'

import stamp from '/public/images/stamp.png';
import fire from '/public/images/fire.svg';
import background from '/public/images/background.png'

export default function Hero() {
  return (
    <div className={styles.tile}>
      <section className={styles.hero} style={{ backgroundImage: `url(${background.src})` }}>

        <img src={stamp.src} alt="brand stamp with the following text: ribeiro.codes" className={styles.hero__stamp} />

        <div className={styles.hero__container}>
          <div className={styles.hero__about}>

            <div className={styles.hero__icon}>
              <img src={fire.src} alt="fire icon" />
            </div>

            <h1 className={styles.hero__title}>hey, i'm <span className={styles.hero__titleName}>vinicius <span
              className={styles.hero__titleDetail}>ribeiro</span></span></h1>

            <p className={styles.hero__description}>I'm a fast learner and problem solver <b>senior software engineer</b> passionate
              about
              code,
              people and knowledge sharing.</p>

          </div>
        </div>

      </section>
    </div>
  )
}