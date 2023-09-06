import styles from "./page.module.css";
import Image from "next/image";

interface ButtonProps {
  text: string;
  textStyles?: any;
  contStyles?: any;
  singleLine?: boolean;
  icon?: any;
  iconStyle?: any;
  onPress: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onPress}
      className={`${styles.button} ${props?.contStyles}`}
    >
      <span
        className={`${styles.buttonText} ${props?.textStyles} ${
          props?.singleLine && styles.inlinePara
        }`}
      >
        {props.text}
        {props?.icon && (
          <Image src={props.icon} alt="" className={props.iconStyle} />
        )}
      </span>
    </button>
  );
}
