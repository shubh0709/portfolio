"use client";
import Image from "next/image";
import styles from "./page.module.css";
import combinedImg from "../../public/images/combined-bg-self-img.png";
import footerImg from "../../public/images/footerImg.png";
import sihLogo from "../../public/images/sih-logo.png";
import factsetLogo from "../../public/images/factset-logo.png";
import Button from "./components/button/button";
import Card from "./components/card/card";
import gullakIcon from "../../public/svgs/gullakLogo.svg";
import gullakText from "../../public/svgs/gullak-text.svg";
import factsetText from "../../public/svgs/factset-text.svg";
import translearnText from "../../public/svgs/translearn-text.svg";

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
            <div className={styles.buttonContainer}>
              <Button text={"Resume"} />
              <Button text={"LinkedIn"} contStyles={styles.linkedInCont} />
            </div>
          </div>

          <div className={styles.imgWrapper}>
            <Image
              src={combinedImg}
              alt={"portrait image"}
              className={styles.yellowBg}
              fill={true}
            />
          </div>
        </div>
        <div className={styles.cardHolder}>
          <Card
            imgOnLeft={true}
            imageLogo={gullakIcon}
            imageText={gullakText}
            imgBgColor={"#292826"}
            workText={
              "Gullak is an Indian B2C startup, it's a platform to buy/sell digital gold \nI worked on developing its mobile app, currently having 1M+ downloads"
            }
          />
          <div className={styles.dummyHeight} />
          <Card
            imgOnLeft={true}
            imageLogo={factsetLogo}
            imageText={factsetText}
            imgBgColor={"#FBEAEB"}
            workText={
              "Factset is a US based firm providing financial data about companies.\nI worked here as a Fullstack engineer."
            }
          />
          <div className={styles.dummyHeight} />
          <Card
            imgOnLeft={true}
            imageLogo={sihLogo}
            imageText={translearnText}
            imgBgColor={"#292826"}
            workText={
              "Teanslearn is a service built to cater students. It revolves around  summarizing text, generating PPT's, automatic question-answering based on the uploaded content"
            }
            textStyle={styles.translearnImgTextStyle}
          />
        </div>
        <div className={styles.footerContainer}>
          <Image
            src={footerImg}
            alt={"footer image"}
            className={styles.footerImg}
          />
        </div>
      </div>
    </main>
  );
}
