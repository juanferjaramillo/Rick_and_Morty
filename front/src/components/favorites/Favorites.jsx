import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import style from "./favorites.module.css";
// import { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const URL_SEP1 = "/character/";
// const URL_SEP2 = "?key=";
// const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";

function Favorites() {
  // const myFavIds = useSelector((stateG) => stateG.myFavorites);
  // traer el array de id de los caracters favoritos

  const { myFavs, setMyFavs } = useState([]);

  useEffect(
  axios(`http://localhost:3001/rickandmorty/fav`)
  .then((char) => {
    setMyFavs(char.data);
  })
  .catch((err) => console.log(err)),
  [])
  console.log(myFavs);
  
  return (
    <>
      <h1>Mis Favoritos</h1>
      {/* <div className={style.divFav}>
        {myFavs.forEach((g) => (
          <Card
            key={g.id}
            id={g.id} //identificador unico del tag
            name={g.name}
            species={g.species}
            gender={g.gender}
            image={g.image}
            //onClose={char.onClose}
            //updateIdDetail={char.updateDetail}
          />
        ))}
      </div> */}
    </>
  );
}
export default Favorites;
