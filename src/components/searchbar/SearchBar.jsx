import style from "./searchbar.module.css";
import React, { useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom'

function SearchBar(props) {
  //props === { onSearch: }
  //recibe por props una función onSearch, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input

  const [char, setChar] = React.useState(
    {
      charAddId: 0,
      inputTxt: ''
    }
  );

  //adiciona el personaje al tablero:
  const handleInput = (evento) => {
    if (evento.target.value < 827 ) {
      setChar({
        ...char, 
        charAddId: evento.target.value, 
        inputTxt: evento.target.value });
      //cambia el estado cada vez que el usuario ingresa un caracter
      //no cambia el dom porque no hay nada nuevo que renderizar
    }else{
      alert('😲 Ese personaje no existe! 😲')
      //informa al usuario inmediatamente ingresa un valor prohibido
    }
    
    //actualiza el estado de la tarjeta que quiere buscar
  };

  //borra la caja de texto de busqueda:
const handleAddClick = (event) => {
  props.onSearch(char.charAddId)
  setChar({...char, inputTxt:''});
}

const handleRandomClick = (id) => {
  console.log(id);
  setChar({
    ...char, 
    charAddId: id, 
    inputTxt: '' });
    props.onSearch(id)
}

  return (
    <>
    
      <div className={style.searchCl}>
        <div className={style.contSearch}>
          <input
            className={style.searchBox}
            placeholder="ID del personaje"
            type="search"
            onChange={handleInput}
            value = {char.inputTxt}
          />
         
          <button 
            className={style.boton} 
            // onClick={()=> props.onSearch(Math.round(826*Math.random()))} >
            onClick={()=> handleRandomClick(Math.round(826*Math.random()))} >
            I feel lucky
            </button>
        </div>

        <div className={style.searchBut}>

          <button 
            className={style.boton} 
            onClick={handleAddClick}>
            Add Card
           </button>

          <button 
            className={style.boton} 
              onClick={() => props.clearCards()}>
              Shovel it!
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
