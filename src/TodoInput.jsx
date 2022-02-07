import React from "react";
import styles from "./Todo.module.css";

export let TodoInput = ({ data, addData, title, setTitle }) => {
  return (
    <>
      <div className={styles.takeInp}>
        <button className={styles.inpBut} onClick={addData}>
          <b>+</b>
        </button>
        <input
          className={styles.input}
          placeholder="Add a to-do..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </>
  );
};
