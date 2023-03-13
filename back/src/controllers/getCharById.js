const axios = require("axios");
const URL_BASE = "https://be-a-rym.up.railway.app/api";
const URL_SEP1 = "/character/";
const URL_SEP2 = "?key=";
const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";

function getCharById(req, res) {
  const {id} = req.params;
  axios(URL_BASE + URL_SEP1 + id + URL_SEP2 + API_KEY)
    .then((char) => {
      const character = char.data;
      //console.log(character);
      res.status(200).json(character);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

module.exports = {getCharById};
