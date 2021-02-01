'use strict'

var express = require('express');

var ArticleController = require('../controllers/article');

var router = express.Router();

//rutas de prueba
router.get('/datosCurso', ArticleController.datosCurso);
router.get('/test-de-controller', ArticleController.test);

//rutas utiles
router.post('/save', ArticleController.save);


module.exports = router;