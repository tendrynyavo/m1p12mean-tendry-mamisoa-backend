const mongoose = require('mongoose');

const FactureSchema = new mongoose.Schema({
    realisation: { type: mongoose.Schema.Types.ObjectId, ref: 'Realisation', required: true },
    dateFacture: { type: Date, required: true },
    status: { type: Number, required: true },
    pieces: [{
        libelle: { type: String, required: true },
        quantite: { type: Number, required: true },
        prixUnitaire: { type: Number, required: true },
        unite: { type: String, required: true }
    }]
});