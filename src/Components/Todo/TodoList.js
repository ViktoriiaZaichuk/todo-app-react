import React, { useContext, useState } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import Todo from './Todo';

const TodoList = ({todos, setTodos, setFilter, filterStatus}) => {
  const {theme} = useContext(ThemeContext);

  const todoStatusFilter = (param) => {
    setFilter(param);
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed === true));
    console.log(todos)
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
          <span className="span-items">items left</span>
        </div>
        <div className={theme ? "TodoStatus light-mode" : "TodoStatus dark-mode" }>
          <div onClick={() => todoStatusFilter("All")} className="TodoListBtn">All</div>
          <div onClick={() => todoStatusFilter("Active")} className="TodoListBtn">Active</div>
          <div onClick={() => todoStatusFilter("Completed")} className="TodoListBtn">Completed</div>
        </div>
        <div className="TodoListBtn" onClick={deleteCompletedTodos}>Clear Completed</div>
      </div>
    </div>
  );
}
  
export default TodoList;