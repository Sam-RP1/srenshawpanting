/**
* routes/main/index.js
**/
const MainRouter = require('express').Router();

MainRouter.route('/')
.get(require('./main.js'))

MainRouter.route('/index.html')
.get(require('./main.js'))

MainRouter.route('/portfolio.html')
.get(require('./main.js'))

MainRouter.route('/portfolioView.html')
.get(require('./main.js'))

MainRouter.route('/services.html')
.get(require('./main.js'))

MainRouter.route('/contact.html')
.get(require('./main.js'))

module.exports = MainRouter;
