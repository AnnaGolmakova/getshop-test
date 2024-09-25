import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>Logo</div>
      <nav className={styles["header__menu"]}>
        <ul className={styles["header__menu-list"]}>
          <li className={styles["header__menu-item"]}>Как работаем</li>
          <li className={styles["header__menu-item"]}>Преимущества</li>
        </ul>
      </nav>
    </header>
  );
}
