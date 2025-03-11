const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, updateUserById, deleteUserById } = require('../service/userService');

// Créer un user
router.post('/', async (req, res) => {
    const user = await createUser(req.body);
    return res.json(user);
});

// Lire toutes les user
router.get('/', async (req, res) => {
    const response = await getAllUsers();
    return res.json(response);
});

// Mettre à jour un user
router.put('/:id', async (req, res) => {
    const response = await updateUserById(req.params.id, req.body);
    return res.json(response);
});

// Supprimer un user
router.delete('/:id', async (req, res) => {
    const response = await deleteUserById(req.params.id);
    return res.json(response);
});

module.exports = router;