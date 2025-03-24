const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schéma pour les motorisations
const MotorisationSchema = new Schema({
  nom: { type: String, required: true },
  type: { type: String, required: true }
});

// Schéma pour les modèles
const ModeleSchema = new Schema({
  nom: { type: String, required: true },
  annee: { type: Number, required: true },
  motorisation: [MotorisationSchema]
});

// Schéma pour les marques
const MarqueSchema = new Schema({
  nom: { type: String, required: true },
  modeles: [ModeleSchema]
});

// Export du modèle Mongoose
module.exports = mongoose.model('Marque', MarqueSchema);