import Graphics from "../graphics/Graphics";
import styles from "./Balance.module.css";

export default function Balance() {
  return (
    <section className={styles["balance"]} id="balance">
      <h2 className={styles["balance__title"]}>
        Баланс между выручкой и удовлетворённостью пользователей
      </h2>
      <div className={styles["balance__items"]}>
        <div className={styles["balance__item"]}>
          <h3 className={styles["balance__subtitle"]}>
            Частотность под контролем
          </h3>
          <p className={styles["balance__description"]}>
            Чтобы не ронять NPS и не увеличивать отток пользователей
          </p>
        </div>
        <Graphics />
        <div className={styles["balance__item"]}>
          <h3 className={styles["balance__subtitle"]}>Максимальная выручка</h3>
          <p className={styles["balance__description"]}>
            За счёт заполенения всех рекламных мест по высокой цене
          </p>
        </div>
      </div>
    </section>
  );
}
