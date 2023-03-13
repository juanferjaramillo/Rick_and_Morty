const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");
const getPhotoById = require("./controllers/getPhotoById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //esta línea permitirá contectar tu FRONT con el SERVIDOR sin que haya problemas de CORS.
    const { url } = req;
    console.log(url);
    if (url.includes("onsearch")) {
      const id = url.split("/").pop();
      //-------------------------------------
      // getCharById(res, id);  //para Rick & Morty
      getPhotoById(res, id);  //para family pictures
      //-------------------------------------
    }

    if (url.includes("detail")) {
      const id = url.split('/').pop();
      getCharDetail(res,id)
    }
  })
  .listen(PORT, "127.0.0.1");
