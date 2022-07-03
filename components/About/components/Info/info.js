import styles from './info.module.scss';

export default function Info() {
  return (
    <div className={styles.about__info}>
      <div className={styles.about__infoContent}>
        <p>Over the past six years, I've been working with design, product and engineering
          teams to help create and build <span className="detail">scalable software</span> with an impeccable
          experience.</p>

        <p>I have an extensive background in leading and
          documenting technical solutions focused on <span className="detail">quality and scalability.</span></p>

        <p>In my free time, I lead a non-profit mentoring program whose main goal is to insert people into the
          technology market, <span className="detail">my dream is to see these people having their lives transformed
            through technology</span> just
          like
          mine was.</p>
      </div>

      <div className={styles.marquee}>
        <div className={styles.about__skills}>
          <h3 className={styles.about__skillsTitle}>Skillset</h3>
          <div className={styles.about__skillsContent}>
            <ul className={styles.about__skillsList}>
              <li className={styles.about__skillsLabel}>TypeScript</li>
              <li className={styles.about__skillsLabel}>JavaScript</li>
              <li className={styles.about__skillsLabel}>React.js</li>
              <li className={styles.about__skillsLabel}>Next.js</li>
              <li className={styles.about__skillsLabel}>HTML/CSS</li>
              <li className={styles.about__skillsLabel}>Node.js</li>
              <li className={styles.about__skillsLabel}>Express.js</li>
              <li className={styles.about__skillsLabel}>Flutter</li>
            </ul>
            <ul className={styles.about__skillsList}>
              <li className={styles.about__skillsLabel}>TypeScript</li>
              <li className={styles.about__skillsLabel}>JavaScript</li>
              <li className={styles.about__skillsLabel}>React.js</li>
              <li className={styles.about__skillsLabel}>Next.js</li>
              <li className={styles.about__skillsLabel}>HTML/CSS</li>
              <li className={styles.about__skillsLabel}>Node.js</li>
              <li className={styles.about__skillsLabel}>Express.js</li>
              <li className={styles.about__skillsLabel}>Flutter</li>
            </ul>
            <ul className={styles.about__skillsList}>
              <li className={styles.about__skillsLabel}>TypeScript</li>
              <li className={styles.about__skillsLabel}>JavaScript</li>
              <li className={styles.about__skillsLabel}>React.js</li>
              <li className={styles.about__skillsLabel}>Next.js</li>
              <li className={styles.about__skillsLabel}>HTML/CSS</li>
              <li className={styles.about__skillsLabel}>Node.js</li>
              <li className={styles.about__skillsLabel}>Express.js</li>
              <li className={styles.about__skillsLabel}>Flutter</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.about__skills} ${styles.about__skillsBackwards}`}>
          <div className={styles.about__skillsContent}>
            <ul className={styles.about__skillsList}>
              <li className={styles.about__skillsLabel}>PostgreSQL</li>
              <li className={styles.about__skillsLabel}>Cypress</li>
              <li className={styles.about__skillsLabel}>Redux</li>
              <li className={styles.about__skillsLabel}>Jest</li>
              <li className={styles.about__skillsLabel}>Micro Frontends</li>
              <li className={styles.about__skillsLabel}>Terraform</li>
              <li className={styles.about__skillsLabel}>AWS</li>
              <li className={styles.about__skillsLabel}>Agile</li>
            </ul>
            <ul className={styles.about__skillsList}>
              <li className={styles.about__skillsLabel}>PostgreSQL</li>
              <li className={styles.about__skillsLabel}>Cypress</li>
              <li className={styles.about__skillsLabel}>Redux</li>
              <li className={styles.about__skillsLabel}>Jest</li>
              <li className={styles.about__skillsLabel}>Micro Frontends</li>
              <li className={styles.about__skillsLabel}>Terraform</li>
              <li className={styles.about__skillsLabel}>AWS</li>
              <li className={styles.about__skillsLabel}>Agile</li>
            </ul>
            <ul className={styles.about__skillsList}>
              <li className={styles.about__skillsLabel}>PostgreSQL</li>
              <li className={styles.about__skillsLabel}>Cypress</li>
              <li className={styles.about__skillsLabel}>Redux</li>
              <li className={styles.about__skillsLabel}>Jest</li>
              <li className={styles.about__skillsLabel}>Micro Frontends</li>
              <li className={styles.about__skillsLabel}>Terraform</li>
              <li className={styles.about__skillsLabel}>AWS</li>
              <li className={styles.about__skillsLabel}>Agile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}