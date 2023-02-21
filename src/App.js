import style from './App.module.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className={style.App}>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          id={Rick.id}
        />
      </div>
      <hr />
      <div>
        <Cards characters={characters} /> 
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => alert('listo!')} 
          // esto es lo que se quiere hacer cuando click en el boton
        />
      </div>
    </div>
  )
}

export default App
