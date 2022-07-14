const Sequelize = require('sequelize')

// importando as configurações do banco de dados
const database = require('./db')

const Users = database.define('Users',

// Criando a tabela de usuários
{
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    }
});

module.exports = Users;