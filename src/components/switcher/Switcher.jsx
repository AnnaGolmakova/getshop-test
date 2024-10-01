import { useId } from "react";
import styles from "./Switcher.module.css";

export default function Switcher({ options, selected, setSelected }) {
  const groupID = useId();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className={styles["switcher"]}>
      {options.map((element) => (
        <label className={styles["switcher__button"]} key={element.value}>
          <input
            type="radio"
            className={styles["hidden"]}
            value={element.value}
            name={groupID}
            checked={element.value === selected}
            onChange={handleChange}
          />
          {element.label}
        </label>
      ))}
    </div>
  );
}
