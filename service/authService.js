const jwt = require('jsonwebtoken');

function getDetailsFromToken(token) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
}
function isTokenExpired(expirationTime) {
    const currentTime = Math.floor(Date.now() / 1000);
    return expirationTime.exp < currentTime;
}

module.exports = {
    getDetailsFromToken,
    isTokenExpired
};