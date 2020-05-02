const crudLibrerias = (app) => {
    const Libreria = require('../models/librerias.js');

    //Funciones de endpoints
    //GET - Devuelve todas las librerías
    findAllLibrerias = (req, res) => {
        Libreria.find((err, librerias) => {
            if (!err) {
                console.log('GET /librerias');
                res.send(librerias);
            }
        })
    }
    //URLS
    app.get('/librerias', findAllLibrerias);
}

module.exports = crudLibrerias;