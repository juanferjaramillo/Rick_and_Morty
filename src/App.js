import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const URL_SEP1 = "/character/";
const URL_SEP2 = "?key=";
const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";
//const URL_H = `${URL_BASE}/character/${id}?key=${API_KEY}`;
//'https://be-a-rym.up.railway.app/api/character/1?key=ff4167f2d3a5.29a3b285bc3fb414a23a'

function App() {
  const [characters, setCharacters] = React.useState([]);

  const onSearch = (item) => {
    //console.log(`${URL_BASE}${URL_SEP1}${item}${URL_SEP2}${API_KEY}`);
    fetch(`${URL_BASE}${URL_SEP1}${item}${URL_SEP2}${API_KEY}`)
      //URL_H = 'https://be-a-rym.up.railway.app/api/character/1?key=ff4167f2d3a5.29a3b285bc3fb414a23a'
      .then((item) => item.json())
      .then((datos) => {
        let ar = [...characters, datos]; //nuevo array con los caracteres existentes unidos al nuevo.
        setCharacters(ar);
      })
      .catch((err) => console.log(`Ocurrio el error ${err}`));
  };

  const onClose = (item) => {
    let arr = characters.filter((elem) => elem.id !== item);
    setCharacters(arr);
  };

  const clearCards = () => {
    setCharacters([]);
  }

  return (
    <div className={style.App}>
      <NavBar onSearch={onSearch} clearCards={clearCards} />
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<Home characters={characters} onClose={onClose} />}></Route>
        {/* <Route path={`/detail${id}`} element={<details />}></Route> */}
        {/* <Route path={`/detail/33`} element={<details />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
