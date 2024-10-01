import TextArea from "../textArea/TextArea";
import Input from "../input/Input";
import Button from "../button/Button";
import styles from "./ContactUs.module.css";
import Checkbox from "../checkbox/Checkbox";

export default function ContactUs() {
  return (
    <section className={styles["contact-us"]}>
      <h2 className={styles["contact-us__title"]}>Заполните форму</h2>
      <form className={styles["contact-us__main"]}>
        <TextArea />
        <div className={styles["contact-us__email-section"]}>
          <div className={styles["contact-us__input-wrapper"]}>
            <Input />
            <Checkbox
              label={
                <>
                  Я ознакомлен(а) с{" "}
                  <a className={styles["contact-us__link"]} href="#">
                    политикой конфиденциальности
                  </a>{" "}
                  и согласен(на) на обработку{" "}
                  <a className={styles["contact-us__link"]} href="#">
                    персональных данных
                  </a>
                  .
                </>
              }
            />
          </div>
          <Button label="Отправить" />
        </div>
      </form>
    </section>
  );
}
