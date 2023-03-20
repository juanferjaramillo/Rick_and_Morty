import Card from "../card/Card";
import { useSelector } from "react-redux";
import style from "./favorites.module.css";

function Favorites() {
  let myFavs = useSelector((stateG) => stateG.myFavorites);
  console.log(myFavs);
  return (
    <>
      <h1>Mis Favoritos</h1>
      <div className={style.divFav}>
        {myFavs.map(({ name, species, gender, image, id }) => {
          return (
            <div>
              <Card
                key={id}
                id={id} //identificador unico del tag
                name={name}
                species={species}
                gender={gender}
                image={image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Favorites;
