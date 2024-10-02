import Image from "next/image";
import Button from "../button/Button";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles["benefits"]} id="benefits">
      <div className={styles["benefits__reports"]}>
        <h2 className={styles["benefits__title"]}>
          Подробные отчёты для вас и правообладателей
        </h2>
        <ul className={styles["benefits__list"]}>
          <li className={styles["benefits__list-item"]}>
            Выручка, CTR, показы и другие показатели в реальном времени.
          </li>
          <li className={styles["benefits__list-item"]}>
            Инструменты контроля качества трафика.
          </li>
          <li className={styles["benefits__list-item"]}>
            Ежемесячные автоматические отчёты для каждого правообладателя.
          </li>
        </ul>
        <Button className={styles["button-main"]} label="Заказать звонок" />
      </div>
      <Image
        src="/assets/Screen.png"
        className={styles["benefits__image"]}
        alt="Экран"
        width="721"
        height="482"
      />
    </section>
  );
}
