import { useState } from "react";
import TextArea from "../textArea/TextArea";
import Input from "../input/Input";
import Button from "../button/Button";
import styles from "./ContactUs.module.css";
import Checkbox from "../checkbox/Checkbox";

export default function ContactUs() {
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("FormData entries:", Object.fromEntries(formData.entries()));
  };

  const handleBlur = (e) => {
    const validity = e.target.validity;
    setEmailError(!validity.valid || validity.patternMismatch);
  };

  return (
    <section className={styles["contact-us"]}>
      <h2 className={styles["contact-us__title"]}>Заполните форму</h2>
      <form
        id="contactForm"
        className={styles["contact-us__main"]}
        onSubmit={handleSubmit}
      >
        <TextArea name="question" required />
        <div className={styles["contact-us__email-section"]}>
          <div className={styles["contact-us__input-wrapper"]}>
            <Input
              name="email"
              type="email"
              placeholder="Введите e-mail"
              pattern="^[\w\-\.]+@([\w\-]+\.)+[\w]{2,}$"
              required
              error={emailError === true ? "Неправильно указана почта" : null}
              onBlur={handleBlur}
            />
            <Checkbox
              name="confirmation"
              required
              label={
                <>
                  Я ознакомлен(а) с{" "}
                  <a className={styles["contact-us__link"]} href="#">
                    политикой конфиденциальности
                  </a>{" "}
                  и согласен(на) на обработку{" "}
                  <a className={styles["contact-us__link"]} href="#">
                    персональных данных
                  </a>
                  .
                </>
              }
            />
          </div>
          <Button label="Отправить" type="submit" />
        </div>
      </form>
    </section>
  );
}
