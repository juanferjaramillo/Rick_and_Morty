import style from "./card.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  removeCharFromTable,
} from "../../redux/actions";

//////////////////////// CARD //////////////////////////

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  console.log("estamos en Card");
  const myFav = useSelector((stateG) => stateG.myFavorites);
  //arreglo de caracteres

  useEffect(
    () =>
      myFav.some((obj) => obj.id === props.id)
        ? setIsFav(true)
        : setIsFav(false),
    []
  );

  const handleFavorite = () => {
    //console.log(props.id);
    if (isFav) {
      setIsFav(false);
      //cambia el estado local para visualizar el boton en rojo
      dispatch(removeFavorite(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
    //console.log(myFav);
  };

  const onClose = () => {
    dispatch(removeCharFromTable(props.id));
  };

  //-----------------------------------------------

  return (
    <div
      className={style.cardCl}
      style={{ transform: `rotate(${Math.round(20 - 40 * Math.random())}deg)` }}
      key={props.key}
      id={props.id}
    >
      <div className={style.bCard}>
        <div>
        {isFav ? (
          <button className={style.fav} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.fav} onClick={handleFavorite}>
            🤍
          </button>
        )}
</div>
<div>
        <button
          className={style.botonX}
          onClick={() => onClose(props.id)}
          id={props.id}
        >
          {" "}
          X{" "}
        </button>
        </div>
   </div>

      <span className={style.tituloName}>{props.name}</span>

      <Link to={`/rickandmorty/detail/${props.id}`}>
        <img className={style.imgChar} src={props.image} alt="character" />
      </Link>

      <span className={style.titulo2}>
        {props.species + " " + props.gender}
      </span>

      <div className={style.id}>{`id: ${props.id}`}</div>
    </div>
  );
}
export default Card;
