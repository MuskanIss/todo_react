import React from "react";
import styles from "./TodoItem.module.css";

export let TodoItem = ({ data }) => {
  console.log(data.title);
  let [color, setColor] = React.useState(styles.blue);
  return (
    <div className={styles.listItem}>
      <h3 className={styles.title}>{data.title}</h3>
      <button
        onClick={() => {
          data.status = !data.status;
          setColor(data.status ? styles.green : styles.blue);
        }}
        className={`${styles.but} ${color}`}
      ></button>
    </div>
  );
};
