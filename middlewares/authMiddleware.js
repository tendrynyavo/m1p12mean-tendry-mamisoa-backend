const { getDetailsFromToken, isTokenExpired } = require('../service/authService');

const authMiddleware = (requiredRoles = []) => {
    return (req, res, next) => {
        if (req.originalUrl === "/login/" || req.originalUrl === "/users/") {
            return next();
        }
        const token = req.headers['authorization'];
        
        if (!token) {
            return res.status(401).json({ message: 'Token is required' });
        }

        // If the token is in the format 'Bearer <token>', strip 'Bearer ' from it
        const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

        try {
            const decoded = getDetailsFromToken(tokenWithoutBearer);
            if (isTokenExpired(decoded.exp)) {
                return res.status(401).json({ message: 'Token expiré' });
            }
            
            req.user = decoded;
            if (requiredRoles.length > 0 && !requiredRoles.includes(decoded.role)) {
                return res.status(401).json({ message: 'Vous n\'êtes pas autorisé à avoir accès à cette ressource' });
            }
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Token invalide', error: error.message });
        }
    }
};

module.exports = authMiddleware;