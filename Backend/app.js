'use strict'

//CARGANDO MODULOS DE NODE PARA CREAR EL SERVER
var express = require('express');
var bodyParser = require('body-parser');
//EJECUTANDO EXPRESS (HTTP)
var app = express();
//CARGAR FICHEROS
var article_router = require('./routes/article');
//CARGAR MIDDELWARE
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
//ACTIVANDO CORS

//añandiendo prefijos

app.use('/api', article_router);

//PREFIJOS DE RUTAS

//EXPORTAR MODULO 
module.exports = app;