import SearchBar from "./SearchBar";

function NavBar({onSearch}) {
    return (
        <SearchBar
        onSearch = {onSearch}
        // esto es lo que se quiere hacer cuando click en el boton
        />
    )
}
export default NavBar