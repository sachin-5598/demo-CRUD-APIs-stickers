const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
require('dotenv').config();

const { notFound, errorHandler } = require('./middleware/errorHandler');
const stickers = require('./api/v1/stickers');

const app = express();

// middlewares
app.use(morgan('tiny'));
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

app.use('/api/v1/stickers', stickers);

// error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
