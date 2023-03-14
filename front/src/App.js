import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import style from "./App.module.css";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Details from "./components/detail/Detail.jsx";
import E404 from "./components/e404/E404.jsx";
import Form from "./components/form/Form.jsx";
import Filtered from "./components/filtered/filtered";
import { useDispatch } from "react-redux";
import { addCharToTable } from "./redux/actions";
import Favorites from "./components/favorites/Favorites";
import axios from 'axios'

// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const URL_SEP1 = "/character/";
// const URL_SEP2 = "?key=";
// const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";
//const URL_H = `${URL_BASE}/character/${id}?key=${API_KEY}`;
//'https://be-a-rym.up.railway.app/api/character/1?key=ff4167f2d3a5.29a3b285bc3fb414a23a'

//------------------------APP-------------------------
function App() {
  //-------------------LOCAL STATES--------------------
  const [characters, setCharacters] = React.useState([]);
  // const [charId, setcharId] = React.useState("");

  const dispatch = useDispatch();

  const onSearch = (id) => {
    // fetch(`${URL_BASE}${URL_SEP1}${id}${URL_SEP2}${API_KEY}`)
    // fetch(`http://127.0.0.1:3001/rickandmorty/character/${id}`)
    // fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
    axios(`http://localhost:3001/rickandmorty/onsearch/${id}`)

      .then((datos) => {
        let ar = [...characters, datos.data]; //nuevo array con los caracteres existentes unidos al nuevo.
        setCharacters(ar);
        dispatch(addCharToTable(datos.data));
        //incluye el nuevo character en el estado global.
      })
      .catch((err) => {
        console.log(`Ocurrio el error ${err}`);
        alert(err);
      });
  };

  //let newCharOnTable = serverFetch(id);

  // const onClose = (item) => {
  //   let arr = characters.filter((elem) => elem.id !== item);
  //   setCharacters(arr);
  // };

  const clearCards = () => {
    setCharacters([]);
  };

  // React.useEffect(useNavigate(`/detail/${charId}`), [charId]);

  // const updateDetail = (id) => {
  //   setcharId(id);
  //   console.log(id);
  // };

  return (
    <div className={style.App}>
      {useLocation().pathname !== "/" ? (
        <NavBar onSearch={onSearch} clearCards={clearCards} />
      ) : null}
      <Routes>
        <Route path="/rickandmorty/favorites/" element={<Favorites />}></Route>
        <Route path="/rickandmorty/detail/:id" element={<Details />}></Route>
        <Route path="/filtered" element={<Filtered />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Form />}></Route>
        <Route path="*" element={<E404 />}></Route>
      </Routes>
    </div>
  );
}
export default App;
