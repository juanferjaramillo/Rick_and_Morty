import React from "react";
import Cards from "./Cards.jsx";
import NavBar from "./NavBar.jsx";

//characters = [ { id:1, name:'xx', species:'xx', gender:'xx' }, {},.. ]
//setea el estado inicial del array characters:

function Home({characters, onClose, updateDetail}) {
  return (
    <div>
      <Cards characters={characters} onClose={onClose} updateIdDetail={updateDetail} />
    </div>
  );
}
export default Home;
