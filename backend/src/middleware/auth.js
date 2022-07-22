// middleware -> permite o acesso ou não a determinadas rotas.
const jwt = require('jsonwebtoken');

function auth(req, res, next){
    let authHeader = req.headers.authorization;
    if (!authHeader){
        return res.status(401).json({"error": "Token não fornecido"});
    }

    const parts = authHeader.split(" ");
    if (!parts.length == 2){
        return res.status(401).json({"error": "Token inválido"});
    }

    const [scheme, token] = parts;
    if (!scheme == "Bearer"){
        return res.status(401).json({"error": "Token mal formatado"});
    }

    jwt.verify(token, "c8fc19bb-6b35-43a9-8dba-0e11cfce2729", (error)=>{
        if (error){
          return res.status(401).json({"error": "Token inválido"});
        }
        return next(); // caso não entre em nenhuma das condições de erro, o token é válido
    });
}

module.exports = auth;
