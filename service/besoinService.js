const Besoin = require('../models/Besoin');

// Get all besoins
const getBesoins = async () => {
    try {
        return await Besoin.find().populate('motorisation');
    } catch (error) {
        throw new Error(`Error fetching besoins: ${error.message}`);
    }
};

// Get besoin by id
const getBesoinById = async (id) => {
    try {
        const besoin = await Besoin.findById(id).populate('motorisation');
        if (!besoin) {
            throw new Error('Besoin not found');
        }
        return besoin;
    } catch (error) {
        throw new Error(`Error fetching besoin: ${error.message}`);
    }
};

const getPrestationByMotorisationId = async (motorisationId) => {
    try {
        const besoin = await Besoin.findOne({ motorisation: motorisationId }).select('prestations');
        if (!besoin) {
            throw new Error('Besoins not found for this motorisation');
        }
        return besoin.prestations.map(prestation => ({
            _id: prestation._id,
            nom: prestation.nom,
            tempsEstime: prestation.tempsEstime,
            pieces: prestation.pieces.map(piece => ({
                _id: piece._id,
                nom: piece.nom,
                unite: piece.unite,
                quantite: piece.quantite,
                prixUnitaire: piece.prixUnitaire
            })),
            piecesString : prestation.pieces.map(piece => `${piece.nom} (${piece.quantite} ${piece.unite})`).join(', '),
            prixTotal: prestation.pieces.reduce((total, piece) => total + (piece.prixUnitaire * piece.quantite), 0)
        })).sort((a, b) => a.nom.localeCompare(b.nom));
    } catch (error) {
        throw new Error(`Error fetching besoins by motorisation: ${error.message}`);
    }
};

// Create new besoin
const createBesoin = async (besoinData) => {
    try {
        const besoin = new Besoin(besoinData);
        return await besoin.save();
    } catch (error) {
        throw new Error(`Error creating besoin: ${error.message}`);
    }
};

// Update besoin
const updateBesoin = async (id, besoinData) => {
    try {
        const besoin = await Besoin.findByIdAndUpdate(
            id, 
            besoinData,
            { new: true, runValidators: true }
        );
        if (!besoin) {
            throw new Error('Besoin not found');
        }
        return besoin;
    } catch (error) {
        throw new Error(`Error updating besoin: ${error.message}`);
    }
};

// Delete besoin
const deleteBesoin = async (id) => {
    try {
        const besoin = await Besoin.findByIdAndDelete(id);
        if (!besoin) {
            throw new Error('Besoin not found');
        }
        return besoin;
    } catch (error) {
        throw new Error(`Error deleting besoin: ${error.message}`);
    }
};

module.exports = {
    getBesoins,
    getBesoinById,
    createBesoin,
    updateBesoin,
    deleteBesoin,
    getPrestationByMotorisationId
};