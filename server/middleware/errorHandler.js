function notFound(req, res, next) {
  const error = new Error('Not Found - ' + req.originalUrl);
  res.status(404);
  next(error);
}

function errorHandler(error, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // if res.status is not predefined
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: error.message,
    error_stack: process.env.NODE_ENV === 'production' ? 'Not Allowed' : error.stack,
  });
}

module.exports = {
  notFound,
  errorHandler
};
