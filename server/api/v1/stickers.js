const express = require('express');
const { route } = require('../../app');

const router = express.Router();

const queries = require('../../db/queries/stickers');
const { isValidID, isValidBody } = require('../../middleware/requestValidations');

router.get('/', (req, res, next) => {
  try {
    queries.getAll().then((stickers) => {
      res.json(stickers);
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', isValidID, (req, res, next) => {
  try {
    queries.getOne(req.params.id).then((sticker) => {
      if (sticker){
        res.json(sticker);
      } else {
        // forward to notFound error handler if 'id' does not exist
        next();
      }
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', isValidBody, (req, res, next) => {
  try {
    queries.create(req.body).then((stickers) => {
      res.json(stickers[0]);
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', isValidID, isValidBody, (req, res, next) => {
  try {
    queries.update(req.params.id, req.body).then((updatedStickers) => {
      if (updatedStickers[0]) {
        res.json(updatedStickers[0]);
      } else {
        // forward to notFound error handler if 'id' does not exist
        next();
      }
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', isValidID, (req, res, next) => {
  try {
    queries.delete(req.params.id).then((rowsAffected) => {
      if(rowsAffected) {
        res.json({
          deleted: true
        });
      } else {
        next();
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
