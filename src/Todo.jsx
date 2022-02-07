import React from "react";
import { TodoList } from "./TodoList";
import { v4 as uuid } from "uuid";
import { TodoInput } from "./TodoInput";
import styles from "./TodoItem.module.css";
import style from "./Todo.module.css";

export let Todo = () => {
  const [data, setData] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [compData, SetCompData] = React.useState([]);
  const [comList, setComList] = React.useState(false);
  const addData = () => {
    let payload = {
      id: uuid(),
      title: title,
      status: false,
    };
    setData([...data, payload]);
  };
  const deleteItem = (cur) => {
    var newArr = data.filter((elem) => {
      return elem.id !== cur.id;
    });
    setData(newArr);
  };
  const addCheck = (cur) => {
    var newArr = data.filter((elem) => {
      return elem.id !== cur.id;
    });
    SetCompData([...compData, cur]);
    setData(newArr);
  };
  const editData = (item) => {
    var newArr = data.map((el) => {
      if (el.id === item.id) {
        el.title = title;
      }
      return el;
    });
    setData(newArr);
  };
  return (
    <>
      <TodoInput
        data={data}
        addData={addData}
        title={title}
        setTitle={setTitle}
      />
      <TodoList
        addData={addData}
        editData={editData}
        setTitle={setTitle}
        title={title}
        data={data}
        deleteItem={deleteItem}
        addCheck={addCheck}
      />
      <div>
        <button className={style.inpBut} onClick={() => setComList(!comList)}>
          Show Completed TO-DOS
        </button>
        {comList ? (
          compData.map((el) => {
            return (
              <div div className={`${styles.listItem} ${styles.compItem}`}>
                <input type="checkbox" checked />
                <h3 className={`${styles.title} ${styles.comp}`}>{el.title}</h3>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
