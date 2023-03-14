const favs = require("../utils/favorites");

function getFavs(req, res) {
  if (favorites.length > 0) {
    res.status(200).json(favorites);
  } else {
    res.status(400).send("No existen favoritos aun!");
  }
}

function postFav(req, res) {
  favs.push(req.body);
  res.status(200).json(favs);
}

module.exports = { getFavs, postFav };
