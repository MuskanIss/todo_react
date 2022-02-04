import React from "react";
import { TodoList } from "./TodoList";
import { v4 as uuid } from "uuid";
import styles from "./Todo.module.css";

export let Todo = () => {
  const [data, setData] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const addData = () => {
    let payload = {
      id: uuid(),
      title: title,
      status: false,
    };
    setData([...data, payload]);
  };
  return (
    <>
      <TodoList data={data} />
      <div className={styles.takeInp}>
        <input
          className={styles.input}
          placeholder="Write Something"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.inpBut} onClick={addData}>
          <b>+</b>
        </button>
      </div>
    </>
  );
};
