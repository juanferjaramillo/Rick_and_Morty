import SearchBar from "./SearchBar";
import Logo from "./Logo.jsx";
import NavButtons from "./NavButtons";
import style from './navbar.module.css'
import {Route, Routes} from  'react-router-dom'

function NavBar({ onSearch }) {
  return (
    <div className={style.navBar}>
      <NavButtons />
      <Logo />
      <SearchBar
        onSearch={onSearch}
        // esto es lo que se quiere hacer cuando click en el boton
      />

    </div>
  );
}
export default NavBar;
