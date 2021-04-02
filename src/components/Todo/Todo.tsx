import React from "react";
import { todosRef } from "../../firebase";

type Props = {
  todo: {
    task: string;
    done: boolean;
    id: string;
  };
};

const Todo = ({ todo }: Props) => {
  const updateTodo = () => {
    todosRef.child(todo.id).set({ ...todo, done: !todo.done });
  };

  return (
    <div className="item">
      <div className="right floated content">
        <div onClick={() => updateTodo()} className="ui green icon button">
          <i className="check icon"></i>
        </div>
        <div
          onClick={() => todosRef.child(todo.id).remove()}
          className="ui red icon button"
        >
          <i className="trash alternate icon"></i>
        </div>
      </div>
      <div
        className="ui center aligned header"
        style={todo.done ? { textDecoration: "line-through" } : {}}
      >
        {todo.task}
      </div>
    </div>
  );
};

export default Todo;
