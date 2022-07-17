const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    let authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({"error": "Nenhum token fornecido"});
    }

    const parts = authHeader.split(" ")
    if(!parts.length == 2){
        return res.status(401).json({"error": "Token inválido"});
    }

    const [scheme, token] = parts;
    if(!scheme == "Bearer"){
        return res.status(401).json({"error": "Token mal formatado"});
    }

    jwt.verify(token, "0ea1a465-6e7a-4c22-9321-59b39e9c8832", (error)=>{
        if(error){
            return res.status(401).json({"error": "Token inválido"});
        }
        
        return next();
    })


}

module.exports = auth;

//Bearer token

//[Bearer token]