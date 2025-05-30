const mongoose = require('mongoose');

// Piece Schema (for both diagnostics and realizations)
const PieceSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    quantite: { type: Number, required: true },
    prixUnitaire: { type: Number, required: true },
    unite: { type: String, required: true }
});

// Prestation Schema (for both diagnostics and realizations)
const PrestationSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    tempsEstime: { type: Number, required: true },
    pieces: [PieceSchema]
});

const RealisationSchema = new mongoose.Schema({
    voiture: { type: mongoose.Schema.Types.ObjectId, ref: 'Voiture', required: true },
    dateDebut: { type: Date, required: true },
    dateFin: { type: Date, required: true },
    reference: { type: String, required: true },
    status: { type: Number, required: true },
    equipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    prestations: [PrestationSchema]
});

module.exports = mongoose.model('Realisation', RealisationSchema);