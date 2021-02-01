'use stric'


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
    }
    
};//end controler

module.exports = controller;