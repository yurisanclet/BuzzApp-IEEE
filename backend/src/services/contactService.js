const knex = require('../database');


module.exports = { 
  async findAll(idUser1){
    const contactsArray = await knex("contactOf").select("idUser2").where({idUser1});
    let contacts = [];

    contactsArray.forEach((id, index) => {
         contacts[index] = id.idUser2;
    });
    console.log(contacts);
    return contacts;
  },
  
  async findOne(id) {
    const user = await knex("contactOf").select("").where({id}).first();
    
    if(!user){
        throw new Error("Usuário não existe");
    }
 
    return user;
  },

  async create(email, id) { // rota post, envio de formularios

    const idUser = await knex("users").select("id").where({id}).first(); // Usuário que chamou a função
    const idUserAdd = await knex("users").select("id").where({email}).first(); // Usuário a ser adicionado
    const idUser1 = idUser.id;
    const idUser2 = idUserAdd.id;
    
    if(await knex("contactOf").select("idUser2").where({idUser1}).first() === idUser2 || await knex("contactOf").select("idUser1").where({idUser2: idUser1}).first() === idUser1){
      throw new Error("Contato já adicionado");
    }

    /*if(idUserr){
      throw new Error("Usuário já adicionado");
    }*/
    
    await knex("contactof").insert({ // inserindo no banco de dados.
      idUser1,
      idUser2
    });
    

    return "Contato adicionado";
  },

}