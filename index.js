const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('Welcome to Express');
  });