import React, { useState } from "react";
import { todosRef } from "../../firebase";

export type Item = {
  task: string;
  done: boolean;
};

const TodoInput = () => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!term) return;
    const item: Item = {
      task: term,
      done: false,
    };
    todosRef.push(item);
    setTerm("");
  };

  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="inline field">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="ui input"
        />
        <button className="ui button">Add</button>
      </div>
    </form>
  );
};

export default TodoInput;
