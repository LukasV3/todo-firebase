import React from "react";
import "./styles/index.scss";

import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <>
      <h1 className="ui top center aligned attached header">Todo Lister</h1>
      <div className="ui attached segment">
        <div className="ui center aligned text container">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default App;
