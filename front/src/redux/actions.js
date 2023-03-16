import axios from "axios";
import { useDispatch } from "react-redux";
export const SET_LOGIN = "SET_LOGIN";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_CHAR_TO_TABLE = "ADD_CHAR_TO_TABLE";
export const REMOVE_CHAR_FROM_TABLE = "REMOVE_CHAR_FROM_TABLE";
export const CLEAR_TABLE = "CLEAR_TABLE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

const dispatch = useDipatch();

export const setLogin = () => {
  return {
    type: SET_LOGIN,
  };
};

//crear la accion para pedir los favoritos al back

export function addFavorite(char) {
  //enviar el nuevo fav al back y ademas adicionarlo al global state
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      char
    );
    console.log("nuevos favoritos en back:");
    console.log(response.data);

    return{
      dispatch({
      type: ADD_TO_FAVORITES,
      payload: response.data
    });
  }}}


export const removeFavorite = (id) => {
  //enviar el fav a remover al back y ademas removerlo del global state (trayendo la nueva lista de favs del back?)
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
export const addCharToTable = (char) => {
  return {
    type: ADD_CHAR_TO_TABLE,
    payload: char,
  };
};
export const removeCharFromTable = (id) => {
  return {
    type: REMOVE_CHAR_FROM_TABLE,
    payload: id,
  };
};
export const clearTable = () => {
  return {
    type: CLEAR_TABLE,
  };
};
export const filter = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const ordenar = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
