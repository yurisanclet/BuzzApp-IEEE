const bcrypt = require("bcryptjs");
const knex = require("../database");
const jwt = require("jsonwebtoken");

module.exports = {
    async login(email, password) {
        const user = await knex("users").select("*").where({email}).first();
        if(!user){
            throw new Error("Usuário não existe");
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new Error("Senha incorrreta");
        }

        const token = jwt.sign({
            name: user.name, email: user.email
        }, "0ea1a465-6e7a-4c22-9321-59b39e9c8832", {expiresIn: "48h"});

        return token;
    }
}