import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";
import { todosRef } from "../../firebase";

import { Item } from "../TodoInput/TodoInput";

const TodoList = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    todosRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          task: items[item].task,
          done: items[item].done,
        });
      }
      setTodos(newState);
    });
  }, []);

  return (
    <div className="ui divided list">
      {todos.map((todo: Item & { id: string }, i: number) => {
        return <Todo todo={todo} key={i} />;
      })}
    </div>
  );
};

export default TodoList;
