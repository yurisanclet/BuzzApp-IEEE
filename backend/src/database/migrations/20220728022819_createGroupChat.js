/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("group_chat", (table)=>{
        table.uuid("id").primary();
        table.uuid("group_id").notNullable().references("id").inTable("group").onDelete("CASCADE");
        table.uuid("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("group_chat");
};
