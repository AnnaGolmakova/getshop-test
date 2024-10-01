import styles from "./Graphics.module.css";

export default function Graphics() {
  return (
    <div className={styles["graphics"]}>
      <div className={styles["graphics__line"]}></div>
      <div className={styles["graphics__image"]}></div>
    </div>
  );
}
