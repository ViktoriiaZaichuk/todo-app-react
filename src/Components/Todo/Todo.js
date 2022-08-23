import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

const Todo = ({id, text, completed}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "Todo light-mode" : "Todo dark-mode" }>
      <button 
      className="Btn-checked">
        Check
      </button>
      <li className="Todo-item">{text}</li>
      <button 
      className="Btn-delete">
        Delete
      </button>
    </div>
  );
}
  
export default Todo;