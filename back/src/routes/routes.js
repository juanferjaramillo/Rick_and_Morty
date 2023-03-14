const { Router } = require("express");
const {getCharById} = require("../controllers/getCharById");
const {getCharDetail} = require("../controllers/getCharDetail");
const {getFavs, postFav, deleteFav} = require("../controllers/favs");

const router = Router();

//==========================================================
router.get("/", (req, res) => {
  res.send("Bienvenido a Rick and Morty!");
});
// //=========================ONSEARCH=================================
router.get("/onsearch/:id",getCharById);
//=============================DETAIL=============================
router.get("/detail/:id", getCharDetail);
//===========================FAVORITES===============================
router.get("/fav", getFavs);
router.post('/fav', postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
