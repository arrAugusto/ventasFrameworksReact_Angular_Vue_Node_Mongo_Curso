'use strict'

var express = require('express');

var ArticleController = require('../controllers/article');

var router = express.Router();

router.get('/datosCurso', ArticleController.datosCurso);
router.get('/test-de-controller', ArticleController.test);


module.exports = router;