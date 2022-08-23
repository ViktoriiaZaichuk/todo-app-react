import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import Todo from './Todo';

const TodoList = ({todos}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "TodoList light-mode" : "TodoList dark-mode" }>
      <ul>
        {todos.map(todo => (        
          <Todo 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>

      <div className={theme ? "TodoListBtns light-mode" : "TodoListBtns dark-mode" }>
        <div>5 items left</div>
        <div className={theme ? "TodoStatus light-mode" : "TodoStatus dark-mode" }>
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div>Clear</div>
      </div>
    </div>
  );
}
  
export default TodoList;