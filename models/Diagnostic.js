const mongoose = require('mongoose');

const pieceSchema = new mongoose.Schema({
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

const PrestationSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    tempsEstime: {
        type: Number,
        required: true
    },
    pieces: [pieceSchema]
}, { _id: false });

const DiagnosticSchema = new mongoose.Schema({
    voiture: { type: mongoose.Schema.Types.ObjectId, ref: 'Voiture', required: true },
    dateDebut: { type: Date, required: true },
    dateFin: { type: Date },
    reference: { type: String, required: true },
    status: { type: Number, required: true },
    mecanicien: { type : mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    prestations: [PrestationSchema]
});

module.exports = mongoose.model('Diagnostic', DiagnosticSchema);