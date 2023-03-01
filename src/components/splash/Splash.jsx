import React from "react";
import style from "./splash.module.css";

class Splash extends React.Component {
  render() {
    return (
      <div>
        <img
          className={style.imagen}
          src={style.src}
          alt={`Rick and Morty's Show`}
        ></img>
        ;
      </div>
    );
  }
}
export default Splash;