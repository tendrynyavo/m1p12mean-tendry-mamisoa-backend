const User = require('../models/User');
const jwt = require('jsonwebtoken');

async function getUserDetailsByEmailAndPassword(email, password) {
    const user = await User.findOne({ email: email, password: password });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}
function generateToken(payload) {
    const creationTime = Math.floor(Date.now() / 1000);
    const expirationTime = creationTime + (3 * 60 * 60); // 3 hours in seconds
    payload.iat = creationTime;
    payload.exp = expirationTime;
    return jwt.sign(payload, process.env.SECRET_KEY);
}

async function generateTokenFromUserDetails(data) {
    const userDetails = await getUserDetailsByEmailAndPassword(data.email, data.password);
    const payload = {
        id: userDetails._id,
        email: userDetails.email,
        role: userDetails.role
    };
    return generateToken(payload);
}

module.exports = {
    generateTokenFromUserDetails
};