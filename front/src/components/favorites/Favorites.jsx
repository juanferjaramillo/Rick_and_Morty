import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import style from "./favorites.module.css";
// import { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Favorites() {
  // const myFavIds = useSelector((stateG) => stateG.myFavorites);
  // traer el array de id de los caracters favoritos

  const [myFavs, setMyFavs] = useState([]);

  useEffect(
  axios(`http://localhost:3001/rickandmorty/fav`)
    .then((char) => {
     const fav = char.data;
     console.log(fav);
     setMyFavs([fav]);
   
  console.log("favoritos: ");
  console.log(myFavs.length);
  
  if (myFavs.length <=0) return null;

  return (
    <>
      <h1>Mis Favoritos</h1>
      <div className={style.divFav}>
    
      {myFavs.forEach((g) => {        
          <Card
            key={g.id}
            id={g.id} //identificador unico del tag
            name={g.name}
            species={g.species}
            gender={g.gender}
            image={g.image}
            //onClose={char.onClose}
            //updateIdDetail={char.updateDetail}
          />})}
      </div>
    </>
  );
})
.catch((err) => console.log(err))
,[])

}
export default Favorites;
