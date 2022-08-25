import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

const TodoForm = ({ inputText, setInputText, todos, setTodos }) => {
  const {theme} = useContext(ThemeContext);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    /* Prevent page refresh */
    e.preventDefault();
    
    setTodos([
      ...todos, 
      {
        id: Math.random() * 100,
        text: inputText, 
        completed: false
      }
    ]);
    setInputText("");
  };

  return (
    <div className={theme ? "TodoForm light-mode" : "TodoForm dark-mode" }>
      <form>
        <span className="Btn-checked"></span>
        <input 
            type="text"
            name="todo-input"
            placeholder="Create a new todo..."
            value={inputText}
            onChange={inputTextHandler}
        />
        <button 
        type="submit"
        id="submitTodo"
        onClick={submitTodoHandler}>
        </button>
      </form>
    </div>
  );
}
  
export default TodoForm;