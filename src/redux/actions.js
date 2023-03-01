export const SET_LOGIN = "SET_LOGIN";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const setLogin = () => {
  return {
    type: SET_LOGIN,
  };
};
export const addFavorite = (personaje) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: personaje,
  };
};
export const removeFavorite = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
