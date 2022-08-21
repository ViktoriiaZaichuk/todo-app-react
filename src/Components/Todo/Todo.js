import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

const Todo = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "Todo light-mode" : "Todo dark-mode" }> 
    </div>
  );
}
  
export default Todo;