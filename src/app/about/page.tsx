import Image from "next/image";
import styles from "./page.module.css";
import aboutImg from "../../../public/images/about-self-img.png";
import emailIcon from "../../../public/svgs/email-icon.svg";
import linkedinIcon from "../../../public/svgs/linkedin-icon.svg";
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
              {/* <Button text={"Resume"} /> */}
            </div>
          </div>

          <Image
            src={aboutImg}
            alt={"portrait image"}
            className={styles.aboutImg}
            // fill={true}
          />
        </div>
        <div className={styles.contactFooter}>
          <div className={styles.contactIcons}>
            <Image
              src={emailIcon}
              alt={"email Icon"}
              className={styles.emailIcon}
            />
            <Image
              src={linkedinIcon}
              alt={"linkedin Icon"}
              className={styles.linkedInIcon}
            />
          </div>
          <div className={styles.contactName}>
            <p className={styles.nameStyle}>Shubham Singh</p>
          </div>
        </div>
      </div>
    </main>
  );
}
