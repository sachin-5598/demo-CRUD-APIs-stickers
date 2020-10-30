function isValidID(req, res, next) {
  if(!isNaN(req.params.id)) {
    return next();
  }
  res.status(422);
  next(new Error('Invalid ID'));
}

function isValidBody(req, res, next) {
  const sticker = req.body;
  const hasTitle = typeof sticker.title == 'string' && sticker.title.trim() != '';
  const hasDescription = typeof sticker.description == 'string' && sticker.description.trim() != '';
  const hasRating = !isNaN(sticker.rating);
  const hasURL = typeof sticker.url == 'string' && sticker.url.trim() != '';
  
  if (hasTitle && hasDescription && hasRating && hasURL) {
    return next();
  }
  res.status(422);
  next(new Error('Invalid Sticker'));
}

module.exports = {
  isValidID,
  isValidBody
};