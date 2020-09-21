/**
* routes/index.js
**/
module.exports = function(app) {
  app.use('/main', require('./main'));
  app.use('/', require('./main'));
};
