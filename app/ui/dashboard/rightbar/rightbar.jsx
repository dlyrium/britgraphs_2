import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css";
import Image from "next/image";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bgImage} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Notification!</span>
          <h3 className={styles.title}>This is a notification</h3>
          <span className={styles.subtitle}>
            This is the subtitle of the notification.
          </span>
          <p className={styles.description}>
            This is a paragraph the notification. This is a paragraph describing
            the notification. This a paragraph describing the notification. This
            is a paragraph describing the.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}></div>
        <div className={styles.texts}>
          <span className={styles.notification}>Another notification!</span>
          <h3 className={styles.title}>This is another title.</h3>
          <span className={styles.subtitle}>This is another subtitle.</span>
          <p className={styles.description}>
            This is a describing the notification. This paragraph describing
            notification. This a paragraph describing the . This is a paragraph
            describing the notification.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
