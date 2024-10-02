import { useId } from "react";
import styles from "./Chexbox.module.css";

export default function Checkbox(props) {
  const generatedId = useId();

  return (
    <div className={styles["checkbox"]}>
      <input
        className={styles["checkbox__input"]}
        type="checkbox"
        id={generatedId}
        {...props}
      />
      <label className={styles["checkbox__label"]} htmlFor={generatedId}>
        <span>{props.label}</span>
      </label>
    </div>
  );
}
