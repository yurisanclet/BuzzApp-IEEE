/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("message_relation", (table)=>{
        table.uuid("id").primary();
        table.uuid("message_id").notNullable().references("id").inTable("message").onDelete("CASCADE");
        table.uuid("from_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
        table.uuid("to_id").references("id").inTable("users");
        table.uuid("to_group_id").references("id").inTable("group").onDelete("SET NULL");
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("message_relation");
};
