/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table)=>{
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("biography");
      table.string("email").unique().notNullable(); 
      table.string("password").notNullable();
    })
};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users");  
};
