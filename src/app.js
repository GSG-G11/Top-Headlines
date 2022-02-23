require('env2')('.env');
const express = require('express');
const { join } = require('path');
const compression = require('compression');
const router = require('./routes');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);
module.exports = app;
