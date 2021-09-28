/**
 * routes/main/index.js
 **/
const MainRouter = require('express').Router();

MainRouter.route('/*').get(require('./main.js'));

module.exports = MainRouter;
