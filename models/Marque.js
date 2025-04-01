const mongoose = require('mongoose');
const { Schema } = mongoose;

const ModeleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    annee: { type: Number, required: true },
    motorisations : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Motorisation' }]
});

// Schéma pour les marques
const MarqueSchema = new Schema({
    nom: { type: String, required: true },
    modeles: [ModeleSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Marque', MarqueSchema);