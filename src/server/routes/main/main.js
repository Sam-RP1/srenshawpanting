const express = require('express');
const path = require('path');

const main = express.Router();

module.exports = main;

main.get(['/', '/thedeductiongame'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
