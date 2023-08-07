import Image from "next/image";
import styles from "./page.module.css";
import selfImg from "../../public/images/selfImg.png";
import yellowBg from "../../public/images/yellow-bg.png";
import Button from "./button";
import Card from "./card";
import gullakIcon from "../../public/svgs/gullakLogo.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.mainHeader}>
          <div className={styles.textContent}>
            <p className={styles.topTitle}>{`FULLSTACK ENGINEER`}</p>
            <p className={styles.title}>{`Shubham Singh`}</p>
            <p className={styles.subtitle}>
              Software engineer who loves to build and contribute to great
              products. Avidly looking for opportunities that strive to build
              for the customers by pursuing engineering excellence
            </p>
            <Button text={"Projects"} />
            <Button text={"LinkedIn"} contStyles={styles.linkedInCont} />
          </div>
          <Image
            src={yellowBg}
            alt={"portrain image"}
            className={styles.selfImg}
          />
        </div>
        <div className={styles.cardHolder}>
          <Card imgOnLeft={true} image={gullakIcon} />
          <div className={styles.dummyHeight} />
          <Card imgOnLeft={false} image={gullakIcon} />
          <div className={styles.dummyHeight} />
          <Card imgOnLeft={true} image={gullakIcon} />
        </div>
      </div>
    </main>
  );
}
