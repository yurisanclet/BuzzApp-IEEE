const knexfile = require("../../knexfile.js");
const knex = require("knex")(knexfile["development"]);

module.exports = knex;


// knex migrate:make createUsers