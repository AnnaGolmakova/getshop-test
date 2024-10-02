import Image from "next/image";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={styles["partners"]}>
      <h3 className={styles["partners__title"]}>
        Наши партнеры по монетизации
      </h3>
      <div className={styles["partners__items"]}>
        <Image
          src="/assets/logo/clickwave.png"
          className={styles["partners__item-click"]}
          alt="ClickWave"
          width="177"
          height="54"
        />
        <Image
          src="/assets/logo/zyphronix.png"
          className={styles["partners__item-zyph"]}
          alt="Zyphronix"
          width="102"
          height="71"
        />
        <Image
          src="/assets/logo/novasphere.png"
          className={styles["partners__item-nova"]}
          alt="NovaSphere"
          width="192"
          height="61"
        />
      </div>
    </section>
  );
}
