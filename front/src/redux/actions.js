import axios from "axios";
//import { useDispatch } from "react-redux";
export const SET_LOGIN = "SET_LOGIN";
export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_CHAR_TO_TABLE = "ADD_CHAR_TO_TABLE";
export const REMOVE_CHAR_FROM_TABLE = "REMOVE_CHAR_FROM_TABLE";
export const CLEAR_TABLE = "CLEAR_TABLE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const setLogin = () => {
  return {
    type: SET_LOGIN,
  };
};

export const getAllFavorites = (favs) => {
  //solicita todos los faoritos al backend y actualiza el estado global
  console.log("Action getAllFavorites");
  return async function (dispatch) {
    console.log(response.data);
    const response = await axios.get("https://rym-server.onrender.com/rickandmorty/fav");
    // const response = await axios.get("https://localhost:3001/rickandmorty/fav");
    return dispatch({
      type: GET_ALL_FAVORITES,
      payload: response.data, //array de favorites
    });
  };
};

export function addFavorite(char) {
  //enviar el nuevo fav al back y ademas adicionarlo al global state
  return async function (dispatch) {
    const response = await axios.post(
      "https://rym-server.onrender.com/rickandmorty/fav",
      // "http://localhost:3001/rickandmorty/fav",
      char
    );
    // console.log("nuevos favoritos en back:");
    // console.log(response.data);

    return dispatch({
      type: ADD_TO_FAVORITES,
      payload: response.data,
    });
  };
}

export const removeFavorite = (id) => {
  //enviar el fav a remover al back y ademas removerlo del global state (trayendo la nueva lista de favs del back?)
  return async function (dispatch) {
    const response = await axios.delete(
      `https://rym-server.onrender.com/rickandmorty/fav/${id}`
      // `http://localhost:3001/rickandmorty/fav/${id}`
    );
    return dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: response.data,
    });
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
