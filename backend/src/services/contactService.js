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
    const idUser2 = await knex("users").select("id").where({email}).first();
    const contact = await knex("contactOf").select("idUser2").where({idUser1: id}, {idUser2}).first();
    const user = await knex("users").select("id","name", "biography", "email").where({email}).first();
    
    if(!contact){
        throw new Error("Contato não existente.");
    }
    
    return user;
  },

  async create(email, emailAdd) { // rota post, envio de formularios

    const emailUser = await knex("users").select("*").where({email}).first(); // Usuário que chamou a função
    const emailUserAdd = await knex("users").select("*").where({emailAdd}).first(); // Usuário a ser adicionado
    const emailUser1 = emailUser.email;
    const emailUser2 = emailUserAdd.email;
    
    if(await knex("contactOf").select("emailUser2").where({emailUser1}).first() === emailUser2 || await knex("contactOf").select("emailUser1").where({emailUser2 : emailUser1}).first() === emailUser1){
      throw new Error("Contato já adicionado");
    }

    
    await knex("contactof").insert({ // inserindo no banco de dados.
      emailUser1,
      emailUser2
    });
    

    return "Contato adicionado";
  },

}