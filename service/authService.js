const jwt = require('jsonwebtoken');

function getDetailsFromToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return decoded;
    } catch (error) {
        console.error('Invalid token:', error);
        throw error;
    }
}
function isTokenExpired(expirationTime) {
    const currentTime = Math.floor(Date.now() / 1000);
    return expirationTime.exp < currentTime;
}

module.exports = {
    getDetailsFromToken,
    isTokenExpired
};