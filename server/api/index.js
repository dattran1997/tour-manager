const express = require('express');
const tourRouter = require('./tour/routes');

const apiRouter = express.Router();

apiRouter.use('/api/tour',tourRouter);


module.exports = apiRouter;