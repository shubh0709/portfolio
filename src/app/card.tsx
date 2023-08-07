import Button from "./button";
import styles from "./page.module.css";
import Image from "next/image";

interface CardProps {
  imgOnLeft: boolean;
  image: any;
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.cardCont}>
      {props.imgOnLeft && (
        <div className={styles.cardImgCont}>
          {/* <Image
            src={props.image}
            className={styles.cardImg}
            alt="project image"
          /> */}
        </div>
      )}
      <div className={styles.cardContent}>
        <p>{"Project Name"}</p>
        <p className={styles.projectContent}>
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <Button
          singleLine={true}
          text={"View Project"}
          contStyles={styles.viewProjectButton}
        />
      </div>
      {!props.imgOnLeft && (
        <div className={styles.cardImgCont}>
          <Image
            src={props.image}
            className={styles.cardImg}
            alt="project image"
          />
        </div>
      )}
    </div>
  );
}
