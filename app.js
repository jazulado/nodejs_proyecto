const express = require('express');
const router = require('./routes/ProjectRoutes');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/medapp', router);
module.exports = app;