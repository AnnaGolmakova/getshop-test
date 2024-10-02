import React, { useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Header.module.css";

function MenuList({ isInSidebar = false }) {
  return (
    <nav
      className={clsx(styles["menu"], isInSidebar && styles["menu_sidebar"])}
    >
      <ul
        className={clsx(
          styles["menu__list"],
          isInSidebar && styles["menu__list_sidebar"],
        )}
      >
        <li
          className={clsx(
            styles["menu__item"],
          )}
        >
          <a href="#balance">Преимущества</a>
        </li>
        <li
          className={clsx(
            styles["menu__item"],
          )}
        >
          <a href="#benefits">Как работаем</a>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {
  const isBrowser = typeof window !== "undefined";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>Logo</div>
      {!isOpen && <MenuList />}
      <button
        aria-label="Меню"
        className={styles["menu__button"]}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen &&
        createPortal(
          <Sidebar
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <MenuList isInSidebar />
          </Sidebar>,
          document.body,
        )}
    </header>
  );
}
