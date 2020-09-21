const express = require('express');
const path = require('path');

const main = express.Router();

module.exports = main;

main.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

main.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

main.get('/portfolio.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

main.get('/portfolioView.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolioView.html'));
});

main.get('/services.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

main.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
