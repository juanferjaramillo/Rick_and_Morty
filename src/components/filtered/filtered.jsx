import { useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import style from "./filtered.module.css";

function Filtered() {
  const myFilter = useSelector((stateG) => stateG.charsFiltered);
  // traer el array de id de los caracters favoritos

  return (
    <div className={style.container}>
      {myFilter[0] ?
      <h1>
        Filtro activo por {myFilter[0].gender} - HOME para ver todos de nuevo
      </h1>
      : <h1>Nada que ver por aqui - HOME para ver todos de nuevo</h1>}
      <div className={style.filter}>
        {myFilter.map((g) => (
          <Card
            key={g.id}
            id={g.id} //identificador unico del tag
            name={g.name}
            species={g.species}
            gender={g.gender}
            image={g.image}
            //onClose={char.onClose}
            //updateIdDetail={char.updateDetail}
          />
        ))}
      </div>
    </div>
  );
}
export default Filtered;
