import React from "react";

import Header from "./Header";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList"
import Footer from "./Footer";

function TodoBox() {
    return (
      <div className='TodoBox'>
        <div className="TodoBox-Container">
            <Header />
            <TodoForm />
            <TodoList />
            <Footer />
        </div>
      </div>
    );
  }
  
  export default TodoBox;