import styles from "./page.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.dummyRect}></div>
      <div className={styles.options}>
        <span className={styles.navtext}> Home</span>
        <span className={styles.navtext}> About</span>
        <span className={styles.navtext}> Projects</span>
        <span className={styles.navtext}> Contacts</span>
      </div>
    </div>
  );
}
