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
import emailIcon from "../../public/svgs/email-icon.svg";
import linkedinIcon from "../../public/svgs/linkedin-icon.svg";
import twitterIcon from "../../public/svgs/twitter-icon.svg";
import { openInNewTab } from "./utils/util";

export default function Home() {
  const resumeLink =
    "https://drive.google.com/file/d/1dx0PBYMU3irEHMComs72dWBGY7JuvJbP/view?usp=drive_link";
  const linkedinLink = "https://www.linkedin.com/in/shubhamsingh0109/";
  const twitterLink = "https://twitter.com/imSsingh19";
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
              <Button
                text={"Resume"}
                onPress={() => openInNewTab(resumeLink)}
              />
              {/* <Button
                text={"LinkedIn"}
                onPress={() => openInNewTab(linkedinLink)}
                contStyles={styles.linkedInCont}
              /> */}
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <Image
              src={combinedImg}
              alt={"portrait image"}
              className={styles.yellowBg}
              // fill={true}
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
            onPress={() => openInNewTab("https://gullak.money/")}
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
            onPress={() => openInNewTab("https://www.factset.com/")}
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
            onPress={() => openInNewTab("https://translearn.vercel.app/")}
          />
        </div>
        <div className={styles.contactFooter}>
          <div className={styles.contactIcons}>
            <Image
              src={linkedinIcon}
              alt={"linkedin Icon"}
              className={styles.linkedInIcon}
              onClick={() => openInNewTab(linkedinLink)}
            />
            <Image
              src={twitterIcon}
              alt={"twiiter Icon"}
              className={styles.twitterIcon}
              onClick={() => openInNewTab(twitterLink)}
            />
            {/* <Image
              src={emailIcon}
              alt={"email Icon"}
              className={styles.emailIcon}
            /> */}
          </div>
          <span className={styles.contactName}>
            <Image
              src={emailIcon}
              alt={"email Icon"}
              className={styles.emailIcon}
            />
            <div className={styles.nameStyle}>singhshubh0709@gmail.com 😉</div>
          </span>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Image
          src={footerImg}
          alt={"footer image"}
          className={styles.footerImg}
        />
      </div>
    </main>
  );
}
