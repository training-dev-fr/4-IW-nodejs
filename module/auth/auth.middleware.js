const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        req.token = jwt.verify(token, "vieuhrg65z4g3s1fr6e5gf416e56fe5g68er");
        next();
    } catch (e) {
        return res.status(401).json({error : "Vous devez être authentifié pour réaliser cette action"});
    }
}

module.exports = auth;