const knex = require('../db/connection');

const api_v1_stickers = require('./api/v1/stickers');

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

  it('Should List all records', (done) => {
    api_v1_stickers.ListAllStickers(done);
  });
  it('Should Show one records by ID', (done) => {
    api_v1_stickers.ShowOneStickerByID(done);
  });
  it('Should not return record and Show (422) for not valid ID', (done) => {
    api_v1_stickers.Show422ifIdNotValid(done);
  });
  it('Should not return record and Show (404 - Not Found) if ID does not exist', (done) => {
    api_v1_stickers.Show404ifNoSticker(done);
  });
  it('Should Create a record with valid sticker', (done) => {
    api_v1_stickers.CreateSticker(done);
  });
  it('Should not Create record and Show (422) for not valid sticker', (done) => {
    api_v1_stickers.Show422ifStickerNotValid(done);
  });
  it('Should Update a record with valid updates', (done) => {
    api_v1_stickers.UpdateSticker(done);
  });
  it('Should not Update record and Show (422) for not valid ID', (done) => {
    api_v1_stickers.Show422ifUpdateIdNotValid(done);
  });
  it('Should not Update record and Show (422) for not valid updates', (done) => {
    api_v1_stickers.Show422ifUpdateNotValid(done);
  });
  it('Should not Update record and Show (404 - Not Found) if ID does not exist', (done) => {
    api_v1_stickers.Show404ifNoStickerToUpdate(done);
  });
  it('Should Delete a record with valid ID', (done) => {
    api_v1_stickers.DeleteSticker(done);
  });
  it('Should not Delete record and Show (422) for not valid ID', (done) => {
    api_v1_stickers.Show422ifDeleteIdNotValid(done);
  });
  it('Should not Delete record and Show (404 - Not Found) if ID does not exist', (done) => {
    api_v1_stickers.Show404ifNoStickerToDelete(done);
  });
});