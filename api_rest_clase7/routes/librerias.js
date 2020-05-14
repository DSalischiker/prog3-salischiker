const crudLibrerias = (app) => {
    const Libreria = require('../models/librerias.js');

    //Funciones de endpoints
    //GET - Devuelve todas las librerías
    findAllLibrerias = (req, res) => {
        Libreria.find((err, librerias) => {
            if (!err) {
                console.log('GET /librerias_caba');
                res.send(librerias);
            } else {
                console.log('ERROR:' + err);
            }
        });
    };
    //POST - Insert a new register in the DB
    addLibreria = function (req, res) {
        console.log('POST');
        console.log(req.body);
        var libreria = new Libreria({
            id: req.body.id,
            lat: req.body.lat,
            lng: req.body.lng,
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            category: req.body.category,
            horarios: req.body.horarios,
            type: req.body.type
        });

        libreria.save(function (err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('Error:' + err);
            }
        });

        res.send(libreria);
    };

    //PUT - Update a register that already exists in the DB
    modifyLibrerias = function (req, res) {
        Libreria.findById(req.params.id, function (err, libreria) {
            libreria.id = req.body.id;
            libreria.lat = req.body.lat;
            libreria.lng = req.body.lng;
            libreria.name = req.body.name;
            libreria.description = req.body.description;
            libreria.address = req.body.address;
            libreria.category = req.body.category;
            libreria.horarios = req.body.horarios;
            libreria.type = req.body.type;

            libreria.save(function (err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('Error:' + err);
                }
                res.send(libreria);
            });
        });
    };

    //DELETE - Delete a register with specified ID
    deleteLibreria = function (req, res) {
        Libreria.findById(req.params.id, function (err, libreria) {
            libreria.remove(function (err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('Error:' + err);
                }
                res.send(libreria);
            });
        });
    };
    //URLS
    app.get('/librerias_caba', findAllLibrerias);
    app.post('/librerias_caba', addLibreria);
    app.put('/librerias_caba/:id', modifyLibrerias);
    app.delete('/librerias_caba/:id', deleteLibreria);
}

module.exports = crudLibrerias;