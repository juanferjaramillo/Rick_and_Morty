import style from "./App.module.css";
import React from "react";
// import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Logo from "./components/Logo.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./data.js";
import NavBar from "./components/NavBar.module";
//characters = [ { id:1, name:'xx', species:'xx', gender:'xx' }, {},.. ]
const URL_BASE = "https://be-a-rym.up.railway.app/api";
const URL_SEP1 = "/character/";
const URL_SEP2 = "?key=";
const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";
//const URL_H = `${URL_BASE}/character/${id}?key=${API_KEY}`;
//'https://be-a-rym.up.railway.app/api/character/1?key=ff4167f2d3a5.29a3b285bc3fb414a23a'

// incoming data form URL_H:
// {
//   "id": 1,
//   "name": "Rick Sanchez",
//   "status": "Alive",
//   "species": "Human",
//   "type": "",
//   "gender": "Male",
//   "origin": {},
//   "location": {},
//   "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   "episode": [],
//   "url": "http://be-a-rym.up.railway.app/api/episode/1",
//   "created": "Wed Jan 18 2023 18:38:03 GMT+0000 (Coordinated Universal Time)"
//   }

function App() {
  //------------------------- INITIAL STATES -------------------

  //characters = [ { id:1, name:'xx', species:'xx', gender:'xx' }, {},.. ]
  //setea el estado inicial del array characters:
  const [characters, setCharacters] = React.useState([]);

  //-------------------------FUNCIONES -------------------

  const onSearch = (item) => {
    //console.log(`${URL_BASE}${URL_SEP1}${item}${URL_SEP2}${API_KEY}`);
    fetch(`${URL_BASE}${URL_SEP1}${item}${URL_SEP2}${API_KEY}`)
      //URL_H = 'https://be-a-rym.up.railway.app/api/character/1?key=ff4167f2d3a5.29a3b285bc3fb414a23a'
      .then((item) => item.json())
      .then((datos) => {
        let ar = [...characters, datos] //nuevo array con los caracteres existentes unidos al nuevo.
        setCharacters(ar);
      })
      .catch((err) => console.log(`Ocurrio el error ${err}`));
  };

  const onClose = (item) => {
    let arr = characters.filter((elem) => elem.id !== item);
    setCharacters(arr);
  };

  //
  //const [characters, updateChars] = React.useState(results:[]);
  //characters = { info:{}, results: [ {id:1, name:'xx', ...}, {}, ... ] }

  //------------------------ RENDERIZATION ---------------------
  return (
    <div className={style.App}>
      <div>
        <Logo />
        <NavBar onSearch={onSearch} />
      </div>
      <hr />
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
