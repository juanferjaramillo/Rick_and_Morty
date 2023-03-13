const { Router } = require("express");
const {getCharById} = require("../controllers/getCharById");
const {getCharDetail} = require("../controllers/getCharDetail");
const {getFavs} = require("../controllers/favs");
const favorites = require('../utils/favs')

const router = Router();

//==========================================================
router.get("/", (req, res) => {
  res.send("Bienvenido a Rick and Morty!");
});

// //=========================ONSEARCH=================================
router.get("/onsearch/:id", (req, res)=> {
  const { id } = req.params;
  console.log(id);

  //-------------------------------------
  getCharById(req, res);
  //-------------------------------------
});

//=============================DETAIL=============================
router.get("/detail/:id", getCharDetail);


//===========================FAVORITES===============================
// router.post('/fav', postFav);

router.get("/fav", getFavs);
  // if (favorites.length > 0) {
  //   res.status(200).json(favorites);
  // } else {
  //   res.status(400).send("No existen favoritos aun!");
  // }


//==========================================================
// router.delete("/fav/:id", (req, res) => {
//   const ffvv = favorites.filter((char) => {
//     char.id.toString() !== req.params.id;
//   });
// });

module.exports = router;
