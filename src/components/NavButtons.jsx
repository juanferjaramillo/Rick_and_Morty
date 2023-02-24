import React from "react";
import style from './navbuttons.module.css'
import { Link } from "react-router-dom";

function NavButtons({handleCardsSt}) {

  return (
    <div classname={style.contenedor}>
      {/* <button>Home</button> */}
      {/* <button classname={style.butAbout} onClick={handleCardsSt}>About</button> */}
      <Link to='/about'>ABOUT</Link>
      <Link to='./cards'>HOME</Link>
    </div>
  );
}
export default NavButtons;
