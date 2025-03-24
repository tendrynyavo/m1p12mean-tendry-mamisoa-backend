const mongoose = require('mongoose');

// Piece Schema (for both diagnostics and realizations)
const PieceSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    quantite: { type: Number, required: true },
    prix_unitaire: { type: Number, required: true },
    unite: { type: String, required: true }
});

// Prestation Schema (for both diagnostics and realizations)
const PrestationSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    temps_estime: { type: Number, required: true },
    pieces: [PieceSchema]
});

// Mecanicien Schema (for diagnostics)
const MecanicienSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    contact: { type: String }
});

// Diagnostic Schema
const DiagnosticSchema = new mongoose.Schema({
    date_debut: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    reference: { type: String, required: true },
    status: { type: Number, required: true },
    mecanicien: MecanicienSchema,
    prestations: [PrestationSchema]
});

// Facture Schema
const FactureSchema = new mongoose.Schema({
    date_facture: { type: Date, required: true },
    status: { type: Number, required: true },
    pieces: [{
        libelle: { type: String, required: true },
        quantite: { type: Number, required: true },
        prix_unitaire: { type: Number, required: true },
        unite: { type: String, required: true }
    }]
});

// Realisation Schema
const RealisationSchema = new mongoose.Schema({
    date_debut: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    reference: { type: String, required: true },
    status: { type: Number, required: true },
    equipe: [{
        nom: { type: String, required: true },
        prenom: { type: String, required: true }
    }],
    prestations: [PrestationSchema],
    facture: FactureSchema
});

// Main Voiture Schema
const VoitureSchema = new mongoose.Schema({
    immatricule: { 
        type: String, 
        required: true,
        unique: true
    },
    motorisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Motorisation',
        required: true
    },
    client: {
        nom: { type: String, required: true },
        prenom: { type: String, required: true }
    },
    diagnostics: [DiagnosticSchema],
    realisations: [RealisationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Voiture', VoitureSchema);