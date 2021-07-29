'use strict';

// Imports & Global Variables
const express = require('express');

const app = express();

require('./routes')(app);

// Express app.use
app.use(express.static(__dirname));

// Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
