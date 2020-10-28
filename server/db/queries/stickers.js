const knex = require('../connection');

module.exports = {
  getAll() {
    return knex('sticker');
  }
};
