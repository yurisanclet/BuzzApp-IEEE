const knex = require("../database");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = { 
  async findAll(req, res){
    const users = await knex("users").select("id", "name", "email", "biography");
    return users;
  },
  
  async findOne(id) {
    const user = await knex("users").select("id", "name", "email", "biography").where({id}).first();
    
    if(!user){
        throw new Error("Usuário não existe");
    }
 
    return user;
  },


  async create(name, email, password, biography) { // rota post, envio de formularios
      const user = await knex("users").select("*").where({email}).first(); // verificando se o usuario ja existe


      const hash = await bcrypt.hash(password, 10);
      await knex("users").insert({ // inserindo no banco de dados.
        id: v4(), // gera um id aleatorio criptografado
        name,
        email,
        biography,
        password: hash
      });
      return "Usuário criado com sucesso.";
  },

  async update(id, name,password, biography) {
      const user = await knex("users").select("*").where({id}).first();
      
      if(!user){
          throw new Error("Usuário não existe.");
      }
      
      

      const hash = await bcrypt.hash(password, 10);
      await knex("users").where({id}).update({ // where({id}) para especificar o usuario a ser atualizado
        name,
        biography,
        password: hash 
      })

      return "Usuário atualizado."; 
  },

  async delete(id){
      const user = await knex("users").select("*").where({id}).first();
      
      if (!user){
          throw new Error("Usuário não existe");
      }
      
      await knex("users").where({id}).delete(); // where({id}) para especificar o usuario a ser deletado
      return "Usuário deletado";
  }
}