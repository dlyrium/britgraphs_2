import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Jason Toms</div>
      <div className={styles.copyright}>&copy; All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
