const knex = require('../connection');
const tableNames = require('../../constant/tableName');

module.exports = {
  getAll() {
    return knex(tableNames.sticker);
  },
  getOne(id) {
    return knex(tableNames.sticker).where('id', id).first();
  },
  create(sticker) {
    return knex(tableNames.sticker).insert(sticker, '*');
  },
  update(id, stickerUpdates) {
    return knex(tableNames.sticker).where('id', id).update(stickerUpdates, '*');
  },
  delete(id) {
    return knex(tableNames.sticker).where('id', id).del();
  }
};
