// Este componente Card va a recibir las siguientes props:
// name: Nombre
// species: Especie
// gender: Género
// image: Imagen
//onClose: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.
 
function Card(props) {
   //props = {name:'Rick', gender... }
   return (
      <div class="cardCl">      
         <button className='botonX' onClick={props.onClose}> X </button>
         <span className='tituloName'>{props.name}</span>
         <img className="imgChar" src={props.image} alt="Rick" />
         <span className='titulo2'>{props.species + ' ' + props.gender}</span>
         {/* <span className='titulo2'>{props.gender}</span> */}
      </div>
   );

}
export default Card;