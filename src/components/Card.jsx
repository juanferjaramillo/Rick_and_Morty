import style from './card.module.css'

function Card(props) {
   //props = {name:'Rick', gender... }
   return (
      <div class={style.cardCl}>      
         {/* <button className='botonX' onClick={props.onClose}> X </button> */}
         <button className={style.botonX} onClick={()=>alert('Oh, aun no podemos cerrar esta tarjeta!')}> X </button>
         <span className={style.tituloName}>{props.name}</span>
         <img className={style.imgChar} src={props.image} alt="Rick" />
         <span className={style.titulo2}>{props.species + ' ' + props.gender}</span>
         {/* <span className='titulo2'>{props.gender}</span> */}
      </div>
   );

}
export default Card;

// function Card(props) {
//    //props = {name:'Rick', gender... }
//    return (
//       <div class={"cardCl"}>      
//          {/* <button className='botonX' onClick={props.onClose}> X </button> */}
//          <button className='botonX' onClick={()=>alert('Oh, aun no podemos cerrar esta tarjeta!')}> X </button>
//          <span className='tituloName'>{props.name}</span>
//          <img className="imgChar" src={props.image} alt="Rick" />
//          <span className='titulo2'>{props.species + ' ' + props.gender}</span>
//          {/* <span className='titulo2'>{props.gender}</span> */}
//       </div>
//    );

// }