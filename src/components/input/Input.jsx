import { clsx } from "clsx";
import styles from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={styles["input__wrapper"]}>
      <input
        className={clsx(styles["input"], props.error && styles["input_error"])}
        {...props}
      />
      {props.error && (
        <span className={styles["input__error-txt"]}>{props.error}</span>
      )}
    </div>
  );
}
