const Realisation = require('../models/Realisation');

// Get all realisations
const getRealisations = async () => {
    try {
        return await Realisation.find().populate('referenceDiagnostic').populate('mecanicien');
    } catch (error) {
        throw new Error(`Error fetching realisations: ${error.message}`);
    }
};

const getRealisationsByMecanicien = async (mecanicienId) => {
    try {
        return await Realisation.find({ mecanicien: mecanicienId }).populate('referenceDiagnostic').populate('mecanicien');
    } catch (error) {
        throw new Error(`Error fetching realisations: ${error.message}`);
    }
};

// Get realisation by id
const getRealisationById = async (id) => {
    try {
        const realisation = await Realisation.findById(id).populate('referenceDiagnostic').populate('mecanicien');
        if (!realisation) {
            throw new Error('Realisation not found');
        }
        return realisation;
    } catch (error) {
        throw new Error(`Error fetching realisation: ${error.message}`);
    }
};

// Create new realisation
const createRealisation = async (realisationData) => {
    try {
        const realisation = new Realisation(realisationData);
        return await realisation.save();
    } catch (error) {
        throw new Error(`Error creating realisation: ${error.message}`);
    }
};

// Update realisation
const updateRealisation = async (id, realisationData) => {
    try {
        const realisation = await Realisation.findByIdAndUpdate(
            id,
            realisationData,
            { new: true, runValidators: true }
        ).populate('mecanicien');
        
        if (!realisation) {
            throw new Error('Realisation not found');
        }
        return realisation;
    } catch (error) {
        throw new Error(`Error updating realisation: ${error.message}`);
    }
};

// Delete realisation
const deleteRealisation = async (id) => {
    try {
        const realisation = await Realisation.findByIdAndDelete(id);
        if (!realisation) {
            throw new Error('Realisation not found');
        }
        return realisation;
    } catch (error) {
        throw new Error(`Error deleting realisation: ${error.message}`);
    }
};

module.exports = {
    getRealisations,
    getRealisationsByMecanicien,
    getRealisationById,
    createRealisation,
    updateRealisation,
    deleteRealisation
};