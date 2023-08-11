import Button from "../button/button";
import styles from "./page.module.css";
import Image from "next/image";

interface CardProps {
  imgOnLeft: boolean;
  imageLogo: any;
  imageText?: any;
  imgBgColor: string;
  workText: string;
  textStyle?: any;
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.cardCont}>
      {props.imgOnLeft && (
        <div
          className={`${styles.cardImgCont}`}
          style={{ ["background-color" as any]: `${props.imgBgColor}` }}
        >
          <Image
            src={props.imageLogo}
            className={styles.cardImgLogo}
            alt="project image"
          />

          <Image
            src={props.imageText}
            className={styles.cardImgText}
            alt="project image"
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <p className={styles.projectName}>{"Project Name"}</p>
        <p className={styles.projectContent}>{props.workText}</p>
        <Button
          singleLine={true}
          text={"View"}
          contStyles={styles.viewProjectButton}
          textStyles={styles.viewProjectButtonText}
        />
      </div>
      {!props.imgOnLeft && (
        <div
          className={`${styles.cardImgCont}`}
          style={{ ["background-color" as any]: `${props.imgBgColor}` }}
        >
          <Image
            src={props.imageLogo}
            className={styles.cardImgLogo}
            alt="project image"
          />
          <Image
            src={props.imageText}
            className={styles.cardImgText}
            alt="project image"
          />
        </div>
      )}
    </div>
  );
}
