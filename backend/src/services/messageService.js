const knex = require("../database");
const { v4 } = require("uuid");
const { NOW } = require("sequelize");

module.exports = { 
  async listPrivateChats(id){
    const users = await knex("users").select("id", "name", "email", "biography");
    return users;
  },
  
  async sendMessage(myId, id, message) {
    const user = await knex("users").select("id", "name", "email", "biography").where({id}).first();
    
    if(!user){
        const messageId = v4();
        await knex("message").insert({
            id: messageId,
            message,
            timestamp: NOW()
        });
        await knex("message_relation").insert({
            id: v4(),
            message_id: messageId,
            from_id: myId,
            to_group_id: id
        });
    }else
    {
        const messageId = v4();

        await knex("message").insert({
            id: messageId,
            message,
            timestamp: NOW()
        });
        await knex("message_relation").insert({
            id: v4(),
            message_id: messageId,
            from_id: myId,
            to_id: id
        }); 
    }
 
  },

  async listGroups(){
    const groups = await knex("group").select("title");
    return groups;
  },

  async joinGroup(user_id, group_id){
    const group = await knex("group").select("id").where({id: group_id});

    if(!group){
        throw new Error("Este grupo não existe");
    }
    await knex("group_chat").insert({ // inserindo no banco de dados.
        id: v4(),
        group_id, // Id do grupo escolhido
        user_id
      });
    return "Você foi adicionado ao grupo!";
  },

  async l() { // rota post, envio de formularios
      const users = await knex("users").select("id", "name", "email", "biography");
    
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

  async delete(id, emailToken){
      const user = await knex("users").select("*").where({id}).first();
      const {email} = await knex("users").select("email").where({id}).first();

      if (!user){
          throw new Error("Usuário não existe");
      }
      
      if(email !== emailToken){
          throw new Error("Impossível deletar um outro usuário.");
      }

      await knex("users").where({id}).delete(); // where({id}) para especificar o usuario a ser deletado
      return "Usuário deletado";
  }
}