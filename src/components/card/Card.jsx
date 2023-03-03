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

  const myFav = useSelector((stateG) => stateG.myFavorites);

  useEffect(
    () => (myFav.includes(props.id) ? setIsFav(true) : setIsFav(false)),
    []
  );

  const dispatch = useDispatch();

  const handleFavorite = () => {
    //console.log(props.id);
    if (isFav) {
      setIsFav(false);
      //cambia el estado local para visualizar el boton en rojo
      dispatch(removeFavorite(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props.id));
    }
    console.log(myFav);
  };

  const onClose = () => {
    dispatch(removeCharFromTable(props.id));
  };

  //-----------------------------------------------

  return (
    <div
      className={style.cardCl}
      style={{ transform: `rotate(${Math.round(20 - 40 * Math.random())}deg)` }}
      key={props.id}
    >
      {isFav ? (
        <button className={style.fav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.fav} onClick={handleFavorite}>
          🤍
        </button>
      )}

      <button
        className={style.botonX}
        onClick={() => onClose(props.id)}
        id={props.id}
      >
        {" "}
        X{" "}
      </button>

      <span className={style.tituloName}>{props.name}</span>

      <Link to={`/detail/${props.id}`}>
        <img className={style.imgChar} src={props.image} alt="character" />
        {/* <img className={style.imgChar} src={props.image} alt="character" onClick={()=>props.updateDetail(props.id)}/> */}
      </Link>

      <span className={style.titulo2}>
        {props.species + " " + props.gender}
      </span>

      <div className={style.id}>{`id: ${props.id}`}</div>
    </div>
  );
}
export default Card;
//-------------------------------------------------

// const mapStateToProps = (stateG) => {
//   //trae el estado global al estado local del componente
//   return {
//     myFavorites: stateG.myFavorites,
//   };
// };

// export const mapDispatchToProps = (dispatch) => {
//   //adiciona las funciones addFavorite y removeFavorite a props
//   return {
//     addFavorite: (id) => {
//       dispatch(addFavorite(id));
//     },
//     removeFavorite: (id) => {
//       dispatch(removeFavorite(id));
//     },
//   };
// };

// export default Card;
// export default connect(
//   mapStateToProps, //arma un objeto de lo que obtiene del global state y lo alimenta a props de su mismo componente
//   mapDispatchToProps //adiciona la funcion dispatch que obtiene del global state que recibe a los props
// )(Card);
