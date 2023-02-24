import Card from "./Card";
import style from './cards.module.css'

// va a recibir un arreglo de personajes (con todos sus datos), y va a utilizar un componente Card (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

function Cards( {characters, onClose}) {
   //characters =[ {name:'Rick',gender...}, {name:'Rick',gender...}, ---- ]
  return (
    <div className={style.CardsCl}>
      {characters.map(({ name, species, gender, image, id }) => {
        return (
          <Card
            id={id}  //identificador unico del tag
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;