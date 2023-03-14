// const fs = require('fs');
// const writer = fs.createWriteStream('/src/utils/favor.txt')

let { favorites } = require("../utils/favorites");

function getFavs(req, res) {
  if (favorites.length > 0) {
    console.log('enviando favoritos');
    res.status(200).json(favorites);
  } else {
    console.log('no hay favoritos aun');
    res.status(403).json({err: "No existen favoritos aun!"});
  }
}

function postFav(req, res) {
  favorites.push(req.body);
  res.status(200).json(favorites);
}

function deleteFav(req, res) {
  const {id} = req.params;
  console.log(`borrando ${id}`);
   favorites = favorites.filter((ch) => ch.id.toString() !== id.toString());
  //  writer.write(JSON.stringify(favorites));
  res.status(200).json(favorites);
  
}

module.exports = { getFavs, postFav, deleteFav };
