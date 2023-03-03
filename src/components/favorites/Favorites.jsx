import Card from "../card/Card";
import { useSelector } from "react-redux";

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const URL_SEP1 = "/character/";
const URL_SEP2 = "?key=";
const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";

function Favorites() {
  // traer los id de servidor
  const myFavIds = useSelector((stateG) => stateG.myFavorites); //array de id
  // traer la info de los caracters favoritos
  const myFavChars = myFavIds.map((id) =>
    fetch(`${URL_BASE}${URL_SEP1}${id}${URL_SEP2}${API_KEY}`)
      .then((item) => item.json())
      .then((char) => {
        // //mapear y renderizr cada uno
        return (
          <div>
            <h1>Mis Favoritos</h1>
            {myFavChars.map((char) => {
              <Card
                id={char.id} //identificador unico del tag
                name={char.name}
                species={char.species}
                gender={char.gender}
                image={char.image}
                //onClose={char.onClose}
                updateIdDetail={char.updateDetail}
              />;
            })}
          </div>
        );
      })
  );
}
export default Favorites;
