'use strict';

// Imports & Global Variables
import path from 'path'
import express from 'express'

const app = express();

require('dotenv').config()
require('./routes')(app);

// Express app.use
app.use(express.static(__dirname))

// Server
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
