const express = require('express');
const router = express.Router();
const { getMarques, createMarque } = require('../service/marqueService');

// GET all marques
router.get('/', async (req, res) => {
    try {
        const marques = await getMarques();
        res.status(200).json(marques);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create new marque
router.post('/', async (req, res) => {
    try {
        const newMarque = await createMarque(req.body);
        res.status(201).json(newMarque);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;