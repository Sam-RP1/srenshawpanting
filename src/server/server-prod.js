'use strict';

// Imports & Global Variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

// Express app.use
app.use(express.static(path.join(__dirname, 'public')));

// Server
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
