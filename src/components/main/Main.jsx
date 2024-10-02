import Button from "../button/Button";
import Revenue from "../revenue/Revenue";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <section className={styles["main"]}>
      <div className={styles["main__wrapper"]}>
        <h1 className={styles["main__title"]}>
          Монетизируйте клиентскую базу, не снижая NPS
        </h1>
        <p className={styles["main__description"]}>
          Найдите идеальный баланс выручки и удовлетворённости пользователей
          с платформой рекламной монетизации
        </p>
      </div>
      <Button
        className={styles["button-main"]}
        label={"Заказать звонок"}
        primary
      />
      <Revenue />
    </section>
  );
}
