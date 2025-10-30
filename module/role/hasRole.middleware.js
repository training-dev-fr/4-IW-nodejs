const hasRole = (role) => {
    return (req,res,next) => {
        if(!req.token.roles.some(r => r.code === role)){
            return res.status(403).json({error: "Vous n'avez pas les droits pour réaliser cette action"});
        }
        next();
    }
}

module.exports = hasRole;