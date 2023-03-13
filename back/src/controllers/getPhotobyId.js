const fotos = require("/Users/juanfer/Documents/FSH/rick_morty_app/rick-and-morty/back/src/utils/localData.js");

const getPhotoById = (req, res) => {
  const {id} = req.params;
  const miFoto = fotos.filter((elem) => {
    return elem.id.toString() === id.toString();
  });

  console.log("Mi foto back es ");
  console.log(miFoto[0]);

  res.status(200).json(miFoto)[0];
};

module.exports = getPhotoById;
