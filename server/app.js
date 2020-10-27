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
// only when the APIs are accepting data directly from forms not javascript 
//app.use(express.urlencoded({ extended: false }));

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
