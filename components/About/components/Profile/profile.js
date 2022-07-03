import styles from "./profile.module.scss";

import avatar from '/public/images/vinicius-ribeiro-photo.JPG'
import background from '/public/images/background.png'

export default function Profile() {
  return (
    <div className={styles.about__profile} style={{ backgroundImage: `url(${background.src})` }}>
      <img src={avatar.src} className={styles.about__profileImage} alt="Face picture of Vinicius Ribeiro. White guy with brown hair." />
    </div>
  )
}