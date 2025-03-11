const express = require('express');
const router = express.Router();
const { createUserAuth, getAllUserAuths, updateUserAuthById, deleteUserAuthById } = require('../service/userAuthService');

// Créer un user
router.post('/', async (req, res) => {
    const user = await createUserAuth(req.body);
    return res.json(user);
});

// Lire toutes les user
router.get('/', async (req, res) => {
    const response = await getAllUserAuths();
    return res.json(response);
});

// Mettre à jour un user
router.put('/:id', async (req, res) => {
    const response = await updateUserAuthById(req.params.id, req.body);
    return res.json(response);
});

// Supprimer un user
router.delete('/:id', async (req, res) => {
    const response = await deleteUserAuthById(req.params.id);
    return res.json(response);
});

module.exports = router;