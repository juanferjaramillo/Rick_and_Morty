const {Sequelize} = require('sequelize');
const user_db = "juanfer";
const user_pw = "admin";
const port_db = "5432";
const name_db = "rymdb";
const orm_db = "postgres";
const host_db = "localhost"

//conexion a la base de datos:
const db = new Sequelize(
    `${orm_db}://${user_db}:${user_pw}@${host_db}:${[port_db]}/${name_db}`
) 

module.exports = {}  //exportar los modelos aqui