const express = require("express");
const router = express.Router();

//Importo las funciones del controlador de usuario
const { getItems, createItem } = require('../controllers/user');

//Importo la funcion de validacion de usuario
const {validatorCreateItem} = require('../validators/user');






router.get("/getUsers", getItems);
router.post("/createUser",validatorCreateItem,createItem);


//Exporto el router de auth
module.exports = router