'use strict'

var express = require('express');

var ArticleController = require('../controllers/article');

var router = express.Router();

//rutas de prueba
router.get('/datosCurso', ArticleController.datosCurso);
router.get('/test-de-controller', ArticleController.test);

//rutas utiles
router.post('/save', ArticleController.save);
router.get('/mostrarArticulos/:last?', ArticleController.getArticles);
router.get('/article/:last', ArticleController.getArticles);


module.exports = router;