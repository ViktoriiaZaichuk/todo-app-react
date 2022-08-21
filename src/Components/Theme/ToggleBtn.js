import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

import DarkMode from './../../images/icon-moon.svg';
import LightMode from './../../images/icon-sun.svg';

const ToggleBtn = () => {
    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <button
        type="button"
        onClick={toggleTheme}
        className={theme ? "toggle-btn light-mode" : "toggle-btn dark-mode" }>
            {theme ? <img src={LightMode} alt='Change design mode' /> : <img src={DarkMode} alt='Change design mode' />}
        </button>

    )
}

export default ToggleBtn;