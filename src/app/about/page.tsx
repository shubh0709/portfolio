import Image from "next/image";
import styles from "./page.module.css";
import selfImg from "../../../public/images/selfImg.png";
import yellowBg from "../../../public/images/yellow-bg.png";
import Button from "../components/button/button";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.mainHeader}>
          <div className={styles.textContent}>
            <p className={styles.title}>{`About me`}</p>
            <p className={styles.subtitle}>
              Software engineer who loves to build and contribute to great
              products. Avidly looking for opportunities that strive to build
              for the customers by pursuing engineering excellence
            </p>
            <div className={styles.buttonContainer}>
              <Button text={"Resume"} />
              <Button text={"LinkedIn"} contStyles={styles.linkedInCont} />
            </div>
          </div>
          <Image
            src={yellowBg}
            alt={"portrain image"}
            className={styles.selfImg}
          />
        </div>
      </div>
    </main>
  );
}
