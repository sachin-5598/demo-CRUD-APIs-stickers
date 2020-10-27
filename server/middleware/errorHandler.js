function notFound(req, res, next) {
  const error = new Error('Not Found - ' + req.originalUrl);
  res.status(404);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error_stack: process.env.NODE_ENV === 'production' ? 'Not Allowed' : error.stack,
  });
}

module.exports = {
  notFound,
  errorHandler
};
