import styles from "./Input.module.css";

export default function Input() {
  return (
    <input
      className={styles["input"]}
      type="email"
      placeholder="Введите e-mail"
    ></input>
  );
}
