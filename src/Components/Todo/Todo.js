import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import CheckedIcon from "./../../images/icon-check.svg";
import DeleteIcon from "./../../images/icon-cross.svg";

const Todo = ({todos, setTodos, todo, id, text, completed}) => {
  const {theme} = useContext(ThemeContext);

  const deleteDodoItem = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const completedTodo = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }));
  };

  return (
    <div className={theme ? "Todo light-mode" : "Todo dark-mode" }>
      <button 
      className={todo.completed ? "Btn-checked completed" : "Btn-checked"}
      onClick={completedTodo}>
        {todo.completed ? <img src={CheckedIcon} alt='Todo checked'/> : ''}
      </button>
      <li className={todo.completed ? "TodoItem completed" : "TodoItem"}>{text}</li>
      <button 
      className="Btn-delete"
      onClick={deleteDodoItem}>
        <img src={DeleteIcon} alt='Todo checked' />
      </button>
    </div>
  );
}
  
export default Todo;