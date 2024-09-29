import styles from "./Sidebar.module.css";

export default function Sidebar({ children, onClose }) {
  return (
    <div className={styles["sidebar"]}>
      <button
        className={styles["sidebar__button"]}
        aria-label="Закрыть"
        onClick={onClose}
      />
      {children}
    </div>
  );
}
