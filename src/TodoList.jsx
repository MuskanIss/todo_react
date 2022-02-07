import React from "react";
import { TodoItem } from "./TodoItem";

export let TodoList = ({
  data,
  deleteItem,
  editItem,
  addData,
  editData,
  setTitle,
  title,
  addCheck,
}) => {
  return (
    <>
      {data.map((e) => (
        <TodoItem
          data={e}
          deleteItem={deleteItem}
          editItem={editItem}
          key={e.id}
          id={e.id}
          title={title}
          addData={addData}
          editData={editData}
          setTitle={setTitle}
          addCheck={addCheck}
        />
      ))}
    </>
  );
};
