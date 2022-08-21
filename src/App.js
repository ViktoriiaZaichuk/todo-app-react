import React from "react";
import './App.css';
import TodoBox from './Components/TodoBox';
import ThemeContextProvider from "./Components/Theme/ThemeContext";

const App = () => {
  
  return (
      <ThemeContextProvider>
        <TodoBox />
      </ThemeContextProvider>
  );
}

export default App;
