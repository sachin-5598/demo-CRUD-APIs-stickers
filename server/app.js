const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

// middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

// routes and routers
app.get('/', (req, res) => {
  res.json({
    message: 'Express app working'
  });
});

// error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
