var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var libreriasSchema = new Schema({
    id: {
        type: String
    },
    lat: {
        type: String
    },
    lng: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    category: {
        type: String
    },
    horarios: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = mongoose.model('Librerias', libreriasSchema, 'librerias_caba');