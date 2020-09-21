'use strict';

// Imports & Global Variables
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'

const app = express();
const compiler = webpack(config);

require('dotenv').config()
require('./routes')(app);

// Express app.use
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

// Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
