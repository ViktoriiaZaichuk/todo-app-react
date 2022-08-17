import React from "react";

import darkmode from './../images/icon-sun.svg';

function Header() {
    return (
      <div className='Header'>
        <h1>TODO</h1>
        <div>
            <img src={darkmode} alt='Cange design mode' />
        </div>
      </div>
    );
  }
  
  export default Header;