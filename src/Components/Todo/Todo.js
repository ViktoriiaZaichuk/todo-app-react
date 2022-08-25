import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

import CheckedIcon from "./../../images/icon-check.svg";
import DeleteIcon from "./../../images/icon-cross.svg";

const Todo = ({todos, setTodos, todo, id, text, completed}) => {
  const {theme} = useContext(ThemeContext);

  const deleteDodoItem = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  }

  return (
    <div className={theme ? "Todo light-mode" : "Todo dark-mode" }>
      <button 
      className="Btn-checked">
        <img src={CheckedIcon} alt='Todo checked' />
      </button>
      <li className="Todo-item">{text}</li>
      <button 
      className="Btn-delete"
      onClick={deleteDodoItem}>
        <img src={DeleteIcon} alt='Todo checked' />
      </button>
    </div>
  );
}
  
export default Todo;