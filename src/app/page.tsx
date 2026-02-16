"use client";
import Image from "next/image";
import styles from "./page.module.css";
import combinedImg from "../../public/images/combined-bg-self-img-2.png";
import footerImg from "../../public/images/footerImg.png";
import sihLogo from "../../public/images/sih-logo.png";
import factsetLogo from "../../public/images/factset-logo.png";
import Button from "./components/button/button";
import Card from "./components/card/card";
import gullakIcon from "../../public/svgs/gullakLogo.svg";
import gullakText from "../../public/svgs/gullak-text.svg";
import certifyIcon from "../../public/svgs/certify-logo.svg";
import certifyText from "../../public/svgs/certify-text.svg";
import factsetText from "../../public/svgs/factSet-text.svg";
// import githubText from "../../public/svgs/github-text.svg";
import githubText from "../../public/svgs/github-text-white.svg";
// import translearnText from "../../public/svgs/translearn-text.svg";
import translearnText from "../../public/svgs/translearn-text-blue.svg";
import emailIcon from "../../public/svgs/email-icon.svg";
import linkedinIcon from "../../public/svgs/linkedin-icon.svg";
import twitterIcon from "../../public/svgs/twitter-icon.svg";
import clipboard from "../../public/svgs/copy-to-clipboard.svg";
import { openInNewTab, copyToClipboard } from "./utils/util";
import Lottie from "lottie-react";
import greenTick from "../../public/lotties/green-tick-lottie.json";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import new_tab from "../../public/svgs/new_tab.svg";
// import githubIcon from "../../public/svgs/github_blue_3.svg";
import githubIcon from "../../public/svgs/github_black.svg";

const resumeLink =
  "https://drive.google.com/file/d/1dx0PBYMU3irEHMComs72dWBGY7JuvJbP/view?usp=drive_link";
const linkedinLink = "https://www.linkedin.com/in/shubhamsingh0109/";
const twitterLink = "https://twitter.com/imSsingh19";
const emailId = "singhshubh0709@gmail.com";
const emailLink = `mailto:${emailId}`;
const server_linkAggregator =
  "https://github.com/shubh0709/server-LinksAggregator";

export default function Home() {
  const [textCopied, setTextCopied] = useState(false);

  const notify = () =>
    toast("copied 😉", {
      style: {
        fontFamily: "--font-nunito",
        color: "#25282b",
        fontSize: "2.4rem",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "150%",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#25282b",
      },
    });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.mainHeader}>
          <div className={styles.textContent}>
            <p className={styles.topTitle}>{`FULLSTACK ENGINEER`}</p>
            <span className={styles.title}>{`Hello, my name`}</span>
            <span className={styles.title}>{`is Shubham Singh`}</span>
            <p className={styles.subtitle}>
              Software engineer who loves to build and contribute to great
              products. Avidly looking for opportunities that strive to build
              for the customers by pursuing engineering excellence
            </p>
            <div className={styles.buttonContainer}>
              <Button
                text={"Resume"}
                onPress={() => openInNewTab(resumeLink)}
                contStyles={styles.resumeButton}
                textStyles={styles.resumeButtonText}
              />
              {/* <Button
                text={"LinkedIn"}
                onPress={() => openInNewTab(linkedinLink)}
                contStyles={styles.linkedInCont}
              /> */}
            </div>
          </div>
          <div className={`${styles.imgWrapper}`}>
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
            imageLogo={certifyIcon}
            imageText={certifyText}
            imgBgColor={"#98caeb9c"}
            workText={
              "CertifyOS is a provider data management platform for the healthcare industry."
            }
            onPress={() => openInNewTab("https://www.certifyos.com/")}
          />
          <div className={styles.dummyHeight} />
          <Card
            imgOnLeft={true}
            imageLogo={gullakIcon}
            imageText={gullakText}
            imgBgColor={"#292826"}
            workText={
              "Gullak is an Indian B2C startup, it's a platform to buy/sell digital gold. \nI worked on developing its mobile app, currently having 1M+ downloads"
            }
            onPress={() => openInNewTab("https://gullak.money/")}
          />
          <div className={styles.dummyHeight} />
          <Card
            imgOnLeft={true}
            imageLogo={factsetLogo}
            imageText={factsetText}
            imgBgColor={"#98caeb9c"}
            workText={
              "Factset is a US based firm providing financial data about companies.\nI worked here as a Fullstack engineer."
            }
            onPress={() => openInNewTab("https://www.factset.com/")}
          />
          <div className={styles.dummyHeight} />

          <Card
            imgOnLeft={true}
            imageLogo={githubIcon}
            imageText={githubText}
            imgBgColor={"#292826"}
            workText={
              "Link-Aggregator: Unite the web's finest resources by sharing and upvoting links within categories. Curate knowledge together."
            }
            logoStyle={styles.githubLogoStyle}
            onPress={() => openInNewTab(`${server_linkAggregator}`)}
          />
          <div className={styles.dummyHeight} />
          <Card
            imgOnLeft={true}
            imageLogo={sihLogo}
            imageText={translearnText}
            imgBgColor={"#98caeb9c"}
            workText={
              "Teanslearn is a service built to cater students. It revolves around  summarizing text, generating PPT's, automatic question-answering based on the uploaded content"
            }
            logoStyle={styles.sihLogoStyle}
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
            <Image
              src={emailIcon}
              alt={"email Icon"}
              className={styles.emailIcon}
              onClick={() => openInNewTab(emailLink)}
            />
          </div>
          <span className={styles.contactName}>
            <div className={styles.dummyHeight3} />
            <p className={styles.orKey}>Or</p>
            {/* <Image
              src={emailIcon}
              alt={"email Icon"}
              className={styles.emailIconSmall}
            /> */}
            <div className={styles.dummyHeight3} />
            <div
              className={styles.emailClipboardCont}
              onClick={() => {
                setTextCopied(true);
                copyToClipboard(emailId);
                // notify();
              }}
            >
              <p className={styles.emailMe}>{"Email me at  "}</p>
              {/* <Image
                src={emailIcon}
                alt={"email Icon"}
                className={styles.emailIconSmall}
              /> */}
              <div className={styles.nameStyle}>
                <span className={styles.emailIdText}>
                  singhshubh0709@gmail.com
                </span>
                <Toaster position="bottom-right" reverseOrder={false} />
                {textCopied ? (
                  <Lottie
                    animationData={greenTick}
                    loop={false}
                    width={"5px"}
                    height={"5px"}
                    allowFullScreen={false}
                    style={{
                      height: "2.4rem",
                      width: "2.4rem",
                      marginLeft: "2rem",
                    }}
                  />
                ) : (
                  <Image
                    src={clipboard}
                    alt={"clipboard Icon"}
                    className={styles.clipboardIcon}
                  />
                )}
              </div>
            </div>
          </span>
        </div>
      </div>
      {/* <div className={styles.footerContainer}>
        <Image
          src={footerImg}
          alt={"footer image"}
          className={styles.footerImg}
        />
      </div> */}
    </main>
  );
}
