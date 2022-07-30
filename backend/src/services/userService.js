const knex = require("../database");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = { 
  async findAll(){
    const users = await knex("users").select("id", "name", "email", "biography");
    return users;
  },
  /*
  async findOne(id) {
    const user = await knex("users").select("id", "name", "email", "biography").where({id}).first();
    
    if(!user){
        throw new Error("Usuário não existe");
    }
 
    return user;
  },
*/

  async create(name, email, password, biography) { // rota post, envio de formularios
      const user = await knex("users").select("*").where({email}).first(); // verificando se o usuario ja existe
      
      if(user){
        throw new Error('Usuário já existente')
      }

      //console.log(name)
      //console.log(email)
      //console.log(password)
      // console.log(biography)
      
      const hash = await bcrypt.hash(password, 10);
      await knex("users").insert({ // inserindo no banco de dados.
        id: v4(), // gera um id aleatorio criptografado
        name,
        email,
        biography,
        password: hash
      });
      
      return  "Usuário criado com sucesso!";
  },

  async update(emailUser, name, biography, email) {
      const user = await knex("users").select("*").where({email:emailUser}).first();
      // const {email} = await knex("users").select("email").where({email}).first()

      if(!user){
          throw new Error("Usuário não existe.");
      }
      //console.log(emailUser)
      //console.log(name)
      //console.log(biography)
      if (email !== emailUser){
          throw new Error("Erro ao atualizar dados de outro usuário.");
      }

      await knex("users").where({email:emailUser}).update({ // where({email}) para especificar o usuario a ser atualizado
        name,
        biography,
        email
      })

      return "Usuário atualizado."; 
  },

  async delete(email, emailToken){
      const user = await knex("users").select("*").where({email}).first();
      //const {email} = await knex("users").select("email").where({id}).first();

      if (!user){
          throw new Error("Usuário não existe");
      }
      
      if(email !== emailToken){
          throw new Error("Impossível deletar um outro usuário.");
      }

      await knex("users").where({email}).delete(); // where({id}) para especificar o usuario a ser deletado
      return "Usuário deletado";
  },
  async getUserInfo(email){

    const infos = await knex("users").select("name", "biography").where({email}).first();
    return infos;
  }
}
