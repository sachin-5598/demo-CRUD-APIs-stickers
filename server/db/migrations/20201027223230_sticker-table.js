const tableNames = require('../../constant/tableName');

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.sticker, (table) => {
    table.increments();
    table.text('title');
    table.text('description');
    table.float('rating');
    table.text('url');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.sticker);
};