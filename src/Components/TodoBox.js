import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./Theme/ThemeContext";

import Header from "./Header";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList"
import Footer from "./Footer";

const TodoBox = () => { 
  const {theme} = useContext(ThemeContext);

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filterStatus, setFilterStatus] = useState([]);

  const filteredTodoList = () => {
    switch(filter) {
      case "Completed":
        setFilterStatus(todos.filter((todo) => todo.completed == true))
        break;
      case "Active":
        setFilterStatus(todos.filter((todo) => todo.completed == false))
        break;
      default:
        setFilterStatus(todos);
        break;
    }
  };

  useEffect(() => {
    filteredTodoList();
  }, [todos, filter]);

  return (
    <div className={theme ? "TodoApp light-mode" : "TodoApp dark-mode" }>
      <div className={theme ? "TodoBox light-mode" : "TodoBox dark-mode" }>
        <div className={theme ? "TodoBox-Container light-mode" : "TodoBox-Container dark-mode" }>
            <Header />
            <TodoForm 
              inputText={inputText} 
              setInputText={setInputText} 
              todos={todos} 
              setTodos={setTodos}
            />
            <TodoList 
              todos={todos} 
              setTodos={setTodos}
              setFilter={setFilter}
              filterStatus={filterStatus}
            />
            <Footer />
        </div>
      </div>
    </div>
  );
}
  
export default TodoBox;