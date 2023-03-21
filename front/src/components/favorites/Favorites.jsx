import Card from "../card/Card";
import { useSelector } from "react-redux";
import style from "./favorites.module.css";

function Favorites() {
  let myFavs = useSelector((stateG) => stateG.myFavorites);
  console.log(myFavs);
  return (
    <div className={style.divFav}>
      <h1>Mis Favoritos</h1>
        {myFavs.map(({ name, species, gender, image, id }) => {
          return (
              <Card
                key={id}
                id={id} 
                name={name}
                species={species}
                gender={gender}
                image={image}
              />
          );
        })}
    </div>
  );
}
export default Favorites;
