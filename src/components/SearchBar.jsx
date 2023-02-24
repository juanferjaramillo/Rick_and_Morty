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
        <input
          className={style.searchBox}
          placeholder="ID del personaje"
          type="search"
          onChange={handleInput}
        />

        <div className={style.searchBut}>
          <button className={style.boton} onClick={() => props.onSearch(char)}>
            Agregar
          </button>
          <button className={style.boton} onClick={() => props.clearCards()}>Recoger todo</button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
