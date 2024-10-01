import { useState } from "react";
import Switcher from "../switcher/Switcher";
import styles from "./Revenue.module.css";

export default function Revenue() {
  const [currentTab, setCurrentTab] = useState("operators");
  return (
    <div className={styles["revenue"]}>
      <h2 className={styles["revenue__title"]}>
        Дополнительные источники выручки для разных компаний
      </h2>
      <div className={styles["revenue__description"]}>
        <Switcher
          options={[
            { value: "operators", label: "Операторам" },
            { value: "services", label: "ОТТ сервисам" },
          ]}
          selected={currentTab}
          setSelected={setCurrentTab}
        />
        {currentTab === "operators" && (
          <p className={styles["revenue__details"]}>
            Найдите идеальный баланс выручки и удовлетворённости пользователей с
            платформой рекламной монетизации
          </p>
        )}
        {currentTab === "services" && (
          <p className={styles["revenue__details"]}>
            Дополнительные возможности обогащения данных об аудитории и
            монетизации
          </p>
        )}
      </div>
    </div>
  );
}
