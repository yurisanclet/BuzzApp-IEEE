const knex = require("../database");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = {
    async findAll() {
        const users = await knex("users").select("id", "name", "email");
        return users;
    },

    async findOne(id) {
        const user = await knex("users").select("id", "name", "email").where({id}).first();
        
        if(!user){
            throw new Error("Usuário não existe");
        }

        return user;
    },

    async create(name, email, password) {
        const user = await knex("users").select("*").where({email}).first();

        if(user){
            throw new Error("Usuário já existe");
        }

        const hash = await bcrypt.hash(password, 10);
        await knex("users").insert({
            id: v4(),
            name,
            email,
            password: hash
        })

        return "Usuário criado com sucesso";
    },

    async update(id, name, password) {
        const user = await knex("users").select("*").where({id}).first();

        if(!user){
            throw new Error("Usuário não existe");
        }

        const hash = await bcrypt.hash(password, 10);
        await knex("users").where({id}).update({
            name,
            password: hash
        });

        return "Usuário Atualizado";
    },

    async delete(id) {
        const user = await knex("users").select("*").where({id}).first();
        if(!user){
            throw new Error("usuário não existe");
        }

        await knex("users").where({id}).delete();
        return "Usuário deletado";
    }
}