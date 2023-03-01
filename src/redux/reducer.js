//import action types
import { ADD_TO_FAVORITES } from "./actions";
import { REMOVE_FROM_FAVORITES } from "./actions";
import { SET_LOGIN } from "./actions";

//ESTRUCTURA DEL STOREG:
// {
// logedin: boolean si el usuario esta loged in
// myFavorites: [ {} {} ]
// }

const initialState = {
  logedin: false,
  myFavorites: [],
};

const reducer = (stateG = initialState, action) => {

  switch (action.type) {
    case SET_LOGIN:
      return {
        ...stateG,
        logedin: true,
      };
      
    case ADD_TO_FAVORITES:
      return {
        ...stateG,
        myFavorites: [...stateG.myFavorites, action.id],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...stateG,
        myFavorites: stateG.myFavorites.filter((elem) => elem.id !== action.id),
      };
    default:
      return { ...stateG };
  }
};
export default reducer;
