const Diagnostic = require('../models/Diagnostic');

// Get all diagnostics
const getDiagnostics = async () => {
    try {
        return await Diagnostic.find().populate('mecanicien');
    } catch (error) {
        throw new Error(`Error fetching diagnostics: ${error.message}`);
    }
};

const getDiagnosticsByMecanicien = async (mecanicienId) => {
    try {
        const diagnostics = await Diagnostic.find({ mecanicien: mecanicienId }).populate('mecanicien');
        return diagnostics;
    } catch (error) {
        throw new Error(`Error fetching diagnostics: ${error.message}`);
    }
}

// Get diagnostic by id
const getDiagnosticById = async (id) => {
    try {
        const diagnostic = await Diagnostic.findById(id).populate('mecanicien');
        if (!diagnostic) {
            throw new Error('Diagnostic not found');
        }
        return diagnostic;
    } catch (error) {
        throw new Error(`Error fetching diagnostic: ${error.message}`);
    }
};

// Create new diagnostic
const createDiagnostic = async (diagnosticData) => {
    try {
        const diagnostic = new Diagnostic(diagnosticData);
        return await diagnostic.save();
    } catch (error) {
        throw new Error(`Error creating diagnostic: ${error.message}`);
    }
};

// Update diagnostic
const updateDiagnostic = async (id, diagnosticData) => {
    try {
        const diagnostic = await Diagnostic.findByIdAndUpdate(
            id,
            diagnosticData,
            { new: true, runValidators: true }
        ).populate('mecanicien');
        
        if (!diagnostic) {
            throw new Error('Diagnostic not found');
        }
        return diagnostic;
    } catch (error) {
        throw new Error(`Error updating diagnostic: ${error.message}`);
    }
};

// Delete diagnostic
const deleteDiagnostic = async (id) => {
    try {
        const diagnostic = await Diagnostic.findByIdAndDelete(id);
        if (!diagnostic) {
            throw new Error('Diagnostic not found');
        }
        return diagnostic;
    } catch (error) {
        throw new Error(`Error deleting diagnostic: ${error.message}`);
    }
};

module.exports = {
    getDiagnostics,
    getDiagnosticsByMecanicien,
    getDiagnosticById,
    createDiagnostic,
    updateDiagnostic,   
    deleteDiagnostic,
};