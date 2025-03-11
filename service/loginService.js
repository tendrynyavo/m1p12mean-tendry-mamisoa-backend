const User = require('../models/User');
const jwt = require('jsonwebtoken');

async function getUserDetailsByEmailAndPassword(email, password) {
    try {
        const user = await User.findOne({ email: email, password: password });
        if (!user) {
            return { Success: false, Message: "User not found" };
        }
        return { Success: true, Message: "", Data: user };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
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
    if (!userDetails.Success) {
        return { Success: false, Message: "An error occured", Data: error };
    }
    const payload = {
        id: userDetails._id,
        email: userDetails.email,
        role: userDetails.role
    };
    return { Success: true, Message: "", Data: generateToken(payload) };
}

module.exports = {
    generateTokenFromUserDetails
};