import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import style from "./favorites.module.css";
// import { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Favorites() {
  const myFavIds = useSelector((stateG) => stateG.myFavorites);
  //traer el array de id de los caracters favoritos

  return (
    <>
      <h1>Mis Favoritos</h1>
      <div className={style.divFav}>
        {myFavIds.forEach((g) => {
          <Card
            key={g.id}
            id={g.id} //identificador unico del tag
            name={g.name}
            species={g.species}
            gender={g.gender}
            image={g.image}
            //onClose={char.onClose}
            //updateIdDetail={char.updateDetail}
          />;
        })}
      </div>
    </>
  );
}
export default Favorites;
