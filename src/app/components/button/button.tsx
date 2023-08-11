import styles from "./page.module.css";

interface ButtonProps {
  text: string;
  textStyles?: any;
  contStyles?: any;
  singleLine?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <span className={`${styles.button} ${props?.contStyles}`}>
      <span
        className={`${styles.buttonText} ${props?.textStyles} ${
          props?.singleLine && styles.inlinePara
        }`}
      >
        {props.text}
      </span>
    </span>
  );
}
