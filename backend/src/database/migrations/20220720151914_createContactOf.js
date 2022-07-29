/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable("contactof", (table)=>{
      table.uuid("idUser1").notNullable();
      table.uuid("idUser2").notNullable();
      table.unique(["idUser1", "idUser2"]);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("contactof");  
};
