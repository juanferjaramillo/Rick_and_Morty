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
         <br></br>
         <button class='boton' onClick={() => alert('Emulamos que se cierra la card')}>-- X --</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img class="imgChar" src={props.image} alt="Rick" />
      </div>
   );

}
export default Card;