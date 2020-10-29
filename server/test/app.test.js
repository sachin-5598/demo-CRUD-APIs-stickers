const knex = require('../db/connection');

describe('CRUD Stickers', () => {
  before((done) => {
    // rollback all migrations
    knex.migrate.rollback(undefined,true)
      .then(() => {
        // rum migrations
        return knex.migrate.latest();
      })
      .then(() => {
        // run seeds
        return knex.seed.run();
      })
      .then(() => done());
  });

  it('should Work??', () => {
    console.log('Its working ...');
  });
});