const express = require('express');
const router = express.Router();
const { generateTokenFromUserDetails } = require('../service/loginService');

router.post('/', async (req, res) => {
    const response = await generateTokenFromUserDetails(req.body);
    return res.json(response);
});

module.exports = router;