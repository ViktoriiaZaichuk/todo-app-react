import React, { useContext, useState } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import Todo from './Todo';

const TodoList = ({todos, setTodos, setFilter, filterStatus}) => {
  const {theme} = useContext(ThemeContext);

  const todoStatusFilter = (param) => {
    setFilter(param);
  };

  return (
    <div className={theme ? "TodoList light-mode" : "TodoList dark-mode" }>
      <ul>
        {filterStatus.map(todo => (        
          <Todo
            todos={todos} 
            setTodos={setTodos} 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            todo={todo}
          />
        ))}
      </ul>

      <div className={theme ? "TodoListBtns light-mode" : "TodoListBtns dark-mode" }>
        <div>
          {filterStatus.filter((todo) => todo.completed === false).length} 
          <span>items left</span>
        </div>
        <div className={theme ? "TodoStatus light-mode" : "TodoStatus dark-mode" }>
          <div onClick={() => todoStatusFilter("All")}>All</div>
          <div onClick={() => todoStatusFilter("Active")}>Active</div>
          <div onClick={() => todoStatusFilter("Completed")}>Completed</div>
        </div>
        <div>Clear</div>
      </div>
    </div>
  );
}
  
export default TodoList;