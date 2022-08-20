import React from "react";
import useDarkMode from "use-dark-mode";
import { useTheme } from "./Theme.js";

import darkmodes from './../images/icon-sun.svg';
import lightmodes from './../images/icon-moon.svg';

const Header = () => {
  const darkMode = useDarkMode();
  const theme = useTheme();

  return (
      <div className='Header'>
        <h1>TODO</h1>
        <div>
          <button className="SwitchTheme-btn" type="button" onClick={darkMode.toggle}>
            {theme === "dark-mode" ? <img src={darkmodes} alt='Change design mode' /> : <img src={lightmodes} alt='Change design mode' />}
          </button>
        </div>
      </div>
    );
  }
  
export default Header;