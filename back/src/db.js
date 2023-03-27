const { Sequelize } = require("sequelize");
const charmodel = require("./models/charmodel");
const gendermodel = require("./models/gendermodel");
const speciesmodel = require("./models/speciesmodel");
const statusmodel = require("./models/statusmodel");

const user_db = "juanfer";
const user_pw = "admin";
const port_db = "5432";
const name_db = "rymdb";
const orm_db = "postgres";
const host_db = "localhost";

//conexion to the database:
const db = new Sequelize(
  `${orm_db}://${user_db}:${user_pw}@${host_db}:${[port_db]}/${name_db}`
);

//create the tables in the database:
charmodel(db);
gendermodel(db);
statusmodel(db);
speciesmodel(db);

//define the entities relations:




module.exports = {}; //exportar los modelos aqui
