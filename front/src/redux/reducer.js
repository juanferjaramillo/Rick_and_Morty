//import action types
import { ADD_CHAR_TO_TABLE, ADD_TO_FAVORITES } from "./actions";
import { REMOVE_FROM_FAVORITES, REMOVE_CHAR_FROM_TABLE } from "./actions";
import { SET_LOGIN, CLEAR_TABLE, FILTER, ORDER } from "./actions";

const initialState = {
  logedin: false,
  myFavorites: [], //array de chars favorites
  charsOnTable: [], //array de chars currently on the table
  charsFiltered: [], //array of chars currently filtered
};

const reducer = (stateG = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...stateG,
        logedin: true,
      };

    case ADD_TO_FAVORITES:
      console.log(`Reducer adicionando el ${action.payload}`);
      return {
        ...stateG,
        myFavorites: action.payload,
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...stateG,
        myFavorites: action.payload
      };

    case ADD_CHAR_TO_TABLE:
      return {
        ...stateG,
        charsOnTable: [...stateG.charsOnTable, action.payload],
      };
    case REMOVE_CHAR_FROM_TABLE:
      return {
        ...stateG,
        charsOnTable: stateG.charsOnTable.filter(
          (elem) => elem.id !== action.payload
        ),
      };
    case CLEAR_TABLE:
      return {
        ...stateG,
        charsOnTable: [],
      };
    case FILTER:
      return {
        ...stateG,
        charsFiltered: stateG.charsOnTable.filter(
          (char) => char.gender === action.payload
        ),
      };
    case ORDER:
      if (action.payload === "asc") {
        return {
          ...stateG,
          charsOnTable: [...stateG.charsOnTable].sort((a, b) => 1),
          charsFiltered: [...stateG.charsFiltered].sort((a, b) => 1),
        };
      } else {
        return {
          ...stateG,
          charsOnTable: [...stateG.charsOnTable].sort((a, b) => -1),
          charsFiltered: [...stateG.charsFiltered].sort((a, b) => -1),
        };
      }
    default:
      return { ...stateG };
  }
};
export default reducer;
