import React from "react";

import Todo from './Todo';

function TodoList() {
    return (
      <div className='TodoList'>
        <Todo />

        <div className="TodoList-Btns">
          <div>
            5 items left
          </div>
          <div className="Todo-Status">
            <div>
              All
            </div>
            <div>
              Active
            </div>
            <div>
              Completed
            </div>
          </div>
          <div>
            Clear Completed
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoList;