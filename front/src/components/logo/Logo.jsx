import style from "./logo.module.css";
import { useDispatch } from "react-redux";
import { filter, ordenar } from "../../redux/actions";
import { useNavigate } from "react-router-dom";


function Logo() {
  const ord = 'asc';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    dispatch(filter(event.target.value));
    navigate("/filtered");
  };

  const handleOnClick = (event) => {
    console.log('ordenando');
    ord==='asc' ? dispatch(ordenar('dsc')) :  dispatch(ordenar('asc')) 
  }

  return (
    <div className={style.container}>
      <img
        className={style.logo}
        // src='https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png'
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="Logo"
      ></img>

      <select name="filtro" value='none' onChange={handleOnChange} className={style.select}>
        <option name="" value=''>FILTRO</option>
        <option value="Female">Females</option>
        <option value="Male">Males</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      <button 
      type="button" 
      className={style.boton}
      onClick={handleOnClick}>
        ORDENAR
      </button>
    </div>
  );
}
export default Logo;
