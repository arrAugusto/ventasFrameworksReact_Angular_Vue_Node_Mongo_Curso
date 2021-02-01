'use stric'

var validator = require('validator');

var Article = require('../modelo/article');


var controller = {
  datosCurso: (req, res)=>{
        return res.status(200).send({
            curso: 'Frameworks',
            autor: 'Augusto Gomez',
            ulr: 'www.august.com'
        });
    },
    test: (req, res)=>{
        return res.status(200).send({
            message: 'Soy la acción test del controlador de articulos'
        });
    },
    
    save: (req, res)=>{
        //obtener datos post que el usuario envie
        var params = req.body;
        console.log(params); 
        //validar datos con la libreria validator
        try{
            var validateTitle = !validator.isEmpty(params.title); 
            var validatecontent = !validator.isEmpty(params.content); 
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'datos invalidos'
            });
    
        }

        // si los validator son correctos
        if (validateTitle && validatecontent){
        //crear objeto a guardar
            var article = new Article();
        //asignando valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            
            
        //guardar articulos
            article.save((err, articleStore)=>{
                //articulos no se guardaron correctamente
                if (err || !articleStore){
                    return res.status(200).send({
                        status: 'error',
                        message: 'datos invalidos'
                    });
        
                }
                //sino se guardan los articulos
                return res.status(200).send({
                    status: 'success',
                    article: articleStore
                });
                    
            })
        //responder respuesta
            return res.status(200).send({
                status: 'success',
                article
            });

        }else{
            return res.status(200).send({
                status: 'error',
                message: 'datos invalidos'
            });
    
        }

        return res.status(200).send({
            article: params
        });
    }
};//end controler

module.exports = controller;