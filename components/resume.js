import Head from 'next/head'
import Link from 'next/link'
import styles from './resume.module.scss';

import background from '/public/images/background.png'
import stamp from '/public/images/stamp-white.png';
import arrow from '/public/images/arrow.svg';

export default function Resume() {

  return (
    <>
      <Head>
        <title>Resume | Vinicius Ribeiro - Senior Software Engineer</title>
      </Head>

      <section className={styles.resume} style={{ backgroundImage: `url(${background.src})` }}>
        <img src={stamp.src} alt="brand stamp with the following text: ribeiro.codes" className={styles.stamp} />

        <div className={styles.container}>

          <Link href="/">
            <a className={styles.back}>{"<"} back</a>
          </Link>

          <div className="content">

            <h1 className={styles.title}>Are you interested in hiring me and want to check my <span className={styles.dotted__word}><span className={styles.word}>resume?</span></span></h1>

            <p className={styles.subtitle}><span className="detail">Email me</span> or <span className="detail">send a message</span> through linkedin asking for the <span className="detail">password</span>.</p>

            <form className={styles.form}>
              <input type="password" placeholder='password' required />

              <button>
                <span class="hero__link-detail">
                  <img src={arrow.src} alt="arrow icon" />
                </span>
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  )
};