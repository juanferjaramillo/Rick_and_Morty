import Card from "./Card";

// va a recibir un arreglo de personajes (con todos sus datos), y va a utilizar un componente Card (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

let giro = [ Math.random(), Math.random(), Math.random(), Math.random() ]

function Cards( {characters} ) {
   //characters =[ {name:'Rick',gender...}, {name:'Rick',gender...}, ---- ]
  return (
    <div className="CardsCl">
      {characters.map(({ name, species, gender, image, onClose, id }) => {
        return (
          <Card
            key={id}  //identificador unico del tag
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            giro = {giro[id-1]}
          />
        );
      })}
    </div>
  );
}

// function Cards(props) {
//    //props = {characters:{name:'Rick',gender...}}
//   return (
//     <span>
//       {props.characters.map(({ name, species, gender, image, id }) => {
//         return (
//           <Card
//             name={name}
//             species={species}
//             gender={gender}
//             image={image}
//             onClose={onClose}
//           />
//         );
//       })}
//     </span>
//   );
// }

export default Cards;
