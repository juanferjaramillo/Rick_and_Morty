import style from './searchbar.module.css'

function SearchBar(props) {
  //props === { onSearch: (characterID) => window.alert(characterID) }
  //recibe por props una función onSearch, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input
  return (
    <div>
      <input className={style.searchBox} placeholder="personaje" type="search" />
      <button className={style.boton} onClick={props.onSearch}>Agregar</button>

    </div>
  );
}

export default SearchBar;
