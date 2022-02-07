import React from "react";
import styles from "./TodoItem.module.css";
import { TodoInput } from "./TodoInput";

export let TodoItem = ({
  data,
  deleteItem,
  editItem,
  editData,
  addData,
  addCheck,
  setTitle,
  title,
}) => {
  let [edit, setEdit] = React.useState(false);
  return (
    <div className={styles.listItem}>
      <input
        type="checkbox"
        onClick={() => {
          data.status = !data.status;
          addCheck(data);
        }}
      />
      <div className={styles.inp}>
        {edit ? (
          <TodoInput
            addData={() => {
              editData(data);
              setEdit(false);
            }}
            setTitle={setTitle}
            title={title}
          />
        ) : (
          <h3 className={styles.title}>{data.title}</h3>
        )}
      </div>
      <div>
        <button onClick={() => setEdit(!edit)}>Edit</button>
        <button onClick={() => deleteItem(data)}>Delete</button>
      </div>
    </div>
  );
};
