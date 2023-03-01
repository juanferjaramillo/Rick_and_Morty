import style from "./card.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

//-----------------------------------------------

function Card(props, { addFavorite, removeFavorite }) {
  //props = {name:'Rick', gender... }

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(props.id);
    } else {
      setIsFav(true);
      addFavorite(props);
    }
  };

  React.useEffect(()=>{
    props.myFavorites.forEach((elem)=>{
    if(elem.id===props.id) setIsFav(true)
  },[])})

//   useEffect(() => {
//     myFavorites.forEach((fav) => {
//        if (fav.id === props.id) {
//           setIsFav(true);
//        }
//     });
//  }, [myFavorites]);
  //-----------------------------------------------

  return (
    <div
      className={style.cardCl}
      style={{ transform: `rotate(${Math.round(20 - 40 * Math.random())}deg)` }}
    >
      {
        (isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        ))
      }
            
      <button
        className={style.botonX}
        onClick={() => props.onClose(props.id)}
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

//-------------------------------------------------

const mapStateToProps = (stateG) => {
  //trae el estado global al estado local del componente
  return {
    myFavorites: stateG.myFavorites,
  };
};

export const mapDispatchToProps = (dispatch) => {
  //adiciona las funciones addFavorite y removeFavorite a props
  return {
    addFavorite: (id) => {
      dispatch(addFavorite(id));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

// export default Card;
export default connect(
  mapStateToProps, //arma un objeto de lo que obtiene del global state y lo alimenta a props de su mismo componente
  mapDispatchToProps //adiciona la funcion dispatch que obtiene del global state que recibe a los props
)(Card);
