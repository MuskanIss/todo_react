import React from "react";
import { TodoItem } from "./TodoItem";

export let TodoList = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((e) => (
        <TodoItem data={e} key={e.id} id={e.id} />
      ))}
    </>
  );
};
