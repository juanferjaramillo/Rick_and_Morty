import style from "./card.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  //props = {name:'Rick', gender... }

//   const [clos, setClos] = React.useState("");
//   //crea un estado de una variable que monitoreara cuando se cierre una tarjeta

//   let handleClose = (key) => {
//    console.log(key);
//     setClos();
//   };

  return (
    <div className={style.cardCl} style={{ transform: `rotate(${Math.round(20-40*Math.random())}deg)` }}>
      
      <button
        className={style.botonX}
        onClick={()=>props.onClose(props.id)}
        id={props.id}>
        {" "}X{" "}
      </button>

      <span className={style.tituloName}>{props.name}</span>

      <Link to={`/detail/${props.id}`}>
      <img className={style.imgChar} src={props.image} alt="character"/>
      {/* <img className={style.imgChar} src={props.image} alt="character" onClick={()=>props.updateDetail(props.id)}/> */}
      </Link>
      
      <span className={style.titulo2} >
        {props.species + " " + props.gender}
      </span>

      <div className={style.id}>{`id: ${props.id}`}</div>
    
    </div>
  );
}
export default Card;