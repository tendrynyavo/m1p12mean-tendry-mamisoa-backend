const express = require('express');
const router = express.Router();
const {
    getDiagnostics,
    getDiagnosticById,
    createDiagnostic,
    updateDiagnostic,
    deleteDiagnostic
} = require('../service/diagnosticService');

// GET all diagnostics
router.get('/', async (req, res) => {
    try {
        const diagnostics = await getDiagnostics();
        res.status(200).json(diagnostics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET diagnostic by id
router.get('/:id', async (req, res) => {
    try {
        const diagnostic = await getDiagnosticById(req.params.id);
        res.status(200).json(diagnostic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// POST create new diagnostic
router.post('/', async (req, res) => {
    try {
        const newDiagnostic = await createDiagnostic(req.body);
        res.status(201).json(newDiagnostic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update diagnostic
router.put('/:id', async (req, res) => {
    try {
        const updatedDiagnostic = await updateDiagnostic(req.params.id, req.body);
        res.status(200).json(updatedDiagnostic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE diagnostic
router.delete('/:id', async (req, res) => {
    try {
        await deleteDiagnostic(req.params.id);
        res.status(200).json({ message: 'Diagnostic deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;