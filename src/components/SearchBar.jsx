import style from './searchbar.module.css'
import React from 'react'

function SearchBar(props) {
  //props === { onSearch: }
  //recibe por props una función onSearch, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input
  
  const [char, setChar] = React.useState('');

  const handleInput = (evento) => {
      setChar(evento.target.value)
    }
    
  return (
    <div>
      <input className={style.searchBox} placeholder="personaje" type="search" onChange={handleInput}/> 
      <button className={style.boton} onClick={() => props.onSearch(char)}>Agregar</button>
    </div>
  );
}

export default SearchBar;