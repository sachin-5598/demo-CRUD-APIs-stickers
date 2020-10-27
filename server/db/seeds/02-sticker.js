const tableNames = require('../../constant/tableName');
const stickers = require('../../constant/seed_data/stickers');

exports.seed = async (knex) => {
  await knex.raw('ALTER SEQUENCE sticker_id_seq restart with 1;');
  await knex(tableNames.sticker).insert(stickers);
};
