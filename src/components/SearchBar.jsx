import style from "./searchbar.module.css";
import React from "react";

function SearchBar(props) {
  //props === { onSearch: }
  //recibe por props una función onSearch, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input

  const [char, setChar] = React.useState("");

  const handleInput = (evento) => {
    setChar(evento.target.value);
  };

  return (
    <>
      <div className={style.searchCl}>
        <div className={style.contSearch}>
          <input
            className={style.searchBox}
            placeholder="ID del personaje"
            type="search"
            onChange={handleInput}
          />
         
          <button className={style.boton} onClick={()=> props.onSearch(Math.round(826*Math.random()))} >I feel lucky</button>
        </div>
        <div className={style.searchBut}>
          <button className={style.boton} onClick={() => props.onSearch(char)}>
            Add Card
          </button>
          <button className={style.boton} onClick={() => props.clearCards()}>
            Shovel it!
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
