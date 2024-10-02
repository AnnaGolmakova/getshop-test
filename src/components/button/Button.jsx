import styles from "./Button.module.css";
import clsx from "clsx";

export default function Button({ className, label, primary = false, ...rest }) {
  return (
    <button
      className={clsx(
        styles["button"],
        primary && styles["primary"],
        className,
      )}
      {...rest}
    >
      {label}
    </button>
  );
}
