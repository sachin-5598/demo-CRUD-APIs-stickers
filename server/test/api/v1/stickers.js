const request = require('supertest');
const expect = require('chai').expect;

const app = require('../../../app');
const fixtures = require('../../fixtures');

function ListAllStickers(done) {
  request(app)
    .get('/api/v1/stickers')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('array');
      expect(response.body).to.deep.equal(fixtures.stickers);
      done();
    });
}

function ShowOneStickerByID(done) {
  request(app)
    .get('/api/v1/stickers/1')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('object');
      expect(response.body).to.deep.equal(fixtures.stickers[0]);
      done();
    });
}

function Show404ifNoSticker(done) {
  request(app)
    .get('/api/v1/stickers/50')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(404, done);
}

function Show422ifIdNotValid(done) {
  request(app)
    .get('/api/v1/stickers/anything')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(422, done);
}

function CreateSticker(done) {
  request(app)
    .post('/api/v1/stickers')
    .send(fixtures.sticker)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('object');
      fixtures.sticker.id = 11;
      expect(response.body).to.deep.equal(fixtures.sticker);
      done();
    });
}

function Show422ifStickerNotValid(done) {
  fixtures.sticker.title = ' ';
  request(app)
    .post('/api/v1/stickers')
    .send(fixtures.sticker)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(422, done);
}

function UpdateSticker(done) {
  delete fixtures.sticker.id;
  fixtures.sticker.title = 'Chrome';
  fixtures.sticker.rating = 10;
  request(app)
    .put('/api/v1/stickers/11')
    .send(fixtures.sticker)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('object');
      fixtures.sticker.id = 11;
      expect(response.body).to.deep.equal(fixtures.sticker);
      done();
    });
}

function Show422ifUpdateNotValid(done) {
  fixtures.sticker.title = ' ';
  request(app)
    .put('/api/v1/stickers/11')
    .send(fixtures.sticker)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(422, done);
}

function Show422ifUpdateIdNotValid(done) {
  delete fixtures.sticker.id;
  request(app)
    .put('/api/v1/stickers/anything')
    .send(fixtures.sticker)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(422, done);
}

function Show404ifNoStickerToUpdate(done) {
  fixtures.sticker.title = 'Chrome';
  request(app)
    .put('/api/v1/stickers/50')
    .send(fixtures.sticker)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(404, done);
}

function DeleteSticker(done) {
  request(app)
    .delete('/api/v1/stickers/11')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('object');
      expect(response.body).to.deep.equal({
        deleted: true
      });
      done();
    });
}

function Show422ifDeleteIdNotValid(done) {
  request(app)
    .delete('/api/v1/stickers/anything')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(422, done);
}

function Show404ifNoStickerToDelete(done) {
  request(app)
    .delete('/api/v1/stickers/50')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(404, done);
}

module.exports = {
  ListAllStickers,
  ShowOneStickerByID,
  Show404ifNoSticker,
  Show422ifIdNotValid,
  CreateSticker,
  Show422ifStickerNotValid,
  UpdateSticker,
  Show422ifUpdateNotValid,
  Show422ifUpdateIdNotValid,
  Show404ifNoStickerToUpdate,
  DeleteSticker,
  Show422ifDeleteIdNotValid,
  Show404ifNoStickerToDelete
};