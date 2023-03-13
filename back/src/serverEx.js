const express = require("express");
const cors = require('cors');
const router = require('./routes/routes')
 
const port = 3001;
const serverEx = express();

//middlewares

//npm install cors en la terminal
serverEx.use(cors()); //acceso sin restricciones
//cors tiene configuraciones adicionales, consultar!

serverEx.use(express.json());
  
//Rutas
serverEx.use("/rickandmorty", router);
// serverEx.use(router);

//Server ON
serverEx.listen(port, () => {
  console.log(`Server ready en puerto ${port}`);
});
