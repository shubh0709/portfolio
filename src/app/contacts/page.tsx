import Image from "next/image";
import styles from "./page.module.css";
import selfImg from "../../../public/images/selfImg.png";
import yellowBg from "../../../public/images/yellow-bg.png";
import Button from "../components/button/button";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <form action="/send-data-here" method="post">
          <label className={styles.fieldName}>Name</label>
          <input type="text" className={styles.field} />
          <label className={styles.fieldName}>Email</label>
          <input type="text" className={styles.field} />
          <label className={styles.fieldName}>Message</label>
          <input type="text" className={styles.field} />
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
