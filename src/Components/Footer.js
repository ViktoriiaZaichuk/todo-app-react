import React, { useContext } from "react";
import { ThemeContext } from "./Theme/ThemeContext";

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "Footer light-mode" : "Footer dark-mode" }>
      <p>Drag and drop to reorder list</p>
    </div>
  );
}
  
export default Footer;