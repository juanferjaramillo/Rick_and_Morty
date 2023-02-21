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
         <button className='boton' onClick={props.onClose}>. X .</button>
         <span className='titulo2'>{props.name}</span>
         <span className='titulo2'>{props.species}</span>
         <span className='titulo2'>{props.gender}</span>
         <img className="imgChar" src={props.image} alt="Rick" />
      </div>
   );

}
export default Card;