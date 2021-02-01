'use trict'

var mongoose = require('mongoose');
var app = require('./app.js');
var puerto = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/apiRestBlog', {useNewUrlParser: true})
                .then(()=>{
                console.log('La conexión ala base de datos exitosa');    
                //Creando server y escuchar peticiones (http)
                app.listen(puerto, ()=>{
                    console.log('servidor creado y corriendo en protocol http');
                })    

});

