const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Piece Schema
const pieceSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    unite: {
        type: String,
        required: true
    },
    quantite: {
        type: Number,
        required: true
    },
    prixUnitaire: {
        type: Number,
        required: true
    }
}, {
    _id: false
});

// Prestation Schema
const prestationSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    tempsEstime: {
        type: Number,
        required: true
    },
    pieces: [pieceSchema]
}, { _id : false });

// Besoin Schema
const besoinSchema = new Schema({
    motorisation: {
        type: Schema.Types.ObjectId,
        ref: 'Motorisation',
        required: true
    },
    prestations: [prestationSchema]
});

module.exports = mongoose.model('Besoin', besoinSchema);