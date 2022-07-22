const bcrypt = require("bcryptjs");
const knex = require("../database");
const jwt = require('jsonwebtoken');

module.exports = {
    async login(email, password){
        
        const user = await knex("users").select("*").where({email}).first();
        if (!user){
            throw new Error("Usuário inexistente.");
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new Error("Erro: um dos dados inseridos está incorreto.");
        }
        
        const token = jwt.sign({
          name:user.name,
          email:user.email,
        }, "c8fc19bb-6b35-43a9-8dba-0e11cfce2729" , {expiresIn: "48h"});
        
        
        return token;
    }
} 