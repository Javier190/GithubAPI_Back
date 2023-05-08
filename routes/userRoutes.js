'use strict'

var express = require('express');
var userControllers = require('../controllers/userControllers');

var router = express.Router();

//Rutas prueba No toma obvio pq no existe metodo de pruebaJavier en server.js
//nose si es requerido este routes
//router.get('/prueba', userControllers.metodoPruebaJavier);
//router.get('/article/:id', userControllers.getArticle);

module.exports = router;