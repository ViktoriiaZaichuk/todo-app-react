import React, { useContext } from "react";
import { ThemeContext } from "./Theme/ThemeContext";

import ToggleBtn from "./Theme/ToggleBtn";

const Header = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "Header light-mode" : "Header dark-mode" }>
      <h1>TODO</h1>
      <div>
        <ToggleBtn></ToggleBtn>
      </div>
    </div>
  );
}
  
export default Header;