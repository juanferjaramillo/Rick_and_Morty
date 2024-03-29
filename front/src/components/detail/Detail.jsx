import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './detail.module.css'
import axios from 'axios';

// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const URL_SEP1 = "/character/";
// const URL_SEP2 = "?key=";
// const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";

function Detail() {
  const {id} = useParams();
  console.log(id);
  const [charDetail, setCharDetail] = React.useState({});

  useEffect(() => {
  // fetch(`${URL_BASE}${URL_SEP1}${id}${URL_SEP2}${API_KEY}`)
  // axios(`http://localhost:3001/rickandmorty/onsearch/${id}`)
  axios(`https://rym-server.onrender.com/rickandmorty/onsearch/${id}`)
  .then((item) => setCharDetail(item.data))
  .catch((error) => console.log(`NO FUNCIONO: ${error}`))
  }
  ,
  []);

  return (
    <div className={style.contenedor}>
      <div>
        <img className={style.imgDetail} alt='personajeX' src={charDetail.image} ></img>
      </div>
      <div>
        <h1>{charDetail.name}</h1>
        <hr />
        <h3>{`Genero: ${charDetail.gender}`}</h3>
        {/* <h3>{`Origen: ${charDetail.origin.name}`}</h3> */}
        <h3>{`Origen: ${charDetail?.origin?.name}`}</h3>
        <h2>{`${charDetail.status} ${charDetail.species}`}</h2>
        <h4>{`id: ${charDetail.id}`}</h4>
      </div>
    </div>
  );
}
export default Detail;