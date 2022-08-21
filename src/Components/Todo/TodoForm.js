import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

const TodoForm = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "TodoForm light-mode" : "TodoForm dark-mode" }>
      <input 
          type="text"
          value="Currently typing"
      />
    </div>
  );
}
  
export default TodoForm;