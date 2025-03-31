const Motorisation = require('../models/Motorisation');

// Create
async function createMotorisation(motorisationData) {
    try {
        const motorisation = new Motorisation(motorisationData);
        return await motorisation.save();
    } catch (error) {
        throw new Error(`Error creating motorisation: ${error.message}`);
    }
}

// Read
async function getAllMotorisations() {
    try {
        return await Motorisation.find();
    } catch (error) {
        throw new Error(`Error fetching motorisations: ${error.message}`);
    }
}

async function getMotorisationById(id) {
    try {
        const motorisation = await Motorisation.findById(id);
        if (!motorisation) {
            throw new Error('Motorisation not found');
        }
        return motorisation;
    } catch (error) {
        throw new Error(`Error fetching motorisation: ${error.message}`);
    }
}

// Update
async function updateMotorisation(id, updateData) {
    try {
        const motorisation = await Motorisation.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );
        
        if (!motorisation) {
            throw new Error('Motorisation not found');
        }
        return motorisation;
    } catch (error) {
        throw new Error(`Error updating motorisation: ${error.message}`);
    }
}

// Delete
async function deleteMotorisation(id) {
    try {
        const motorisation = await Motorisation.findByIdAndDelete(id);
        if (!motorisation) {
            throw new Error('Motorisation not found');
        }
        return motorisation;
    } catch (error) {
        throw new Error(`Error deleting motorisation: ${error.message}`);
    }
}

module.exports = {
    createMotorisation,
    getAllMotorisations,
    getMotorisationById,
    updateMotorisation,
    deleteMotorisation
};