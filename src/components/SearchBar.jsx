function SearchBar(props) {
  //props === { onSearch: (characterID) => window.alert(characterID) }
  //recibe por props una función onSearch, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input
  return (
    <div>
      <input className='searchBox' placeholder="personaje" type="search" />
      <button className='boton' onClick={props.onSearch}>Agregar</button>

    </div>
  );
}

export default SearchBar;
