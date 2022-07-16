const knex = require('../database');
const { v4 } = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = { 
  async findAll(req, res){
    const users = await knex("users").select("id", "name", "email");
    return users;
  },
  
  async findOne(req, res) {

  },

  async create(name, email, password) { // rota post, envio de formularios
      const user = await knex("users").select("*").where({email}).first(); // verificando se o usuario ja existe

      if(user){
        throw new Error("Usuário já existe");
      }

      
      const hash = await bcrypt.hash(password, 10);
      await knex("users").insert({ // inserindo no banco de dados.
        id: v4(), // gera um id aleatorio criptografado
        name,
        email,
        password: hash
      });

      return "Usuário criado."
  },

  async update(req, res) {

  },

  async delete(req, res){
    
  }
}