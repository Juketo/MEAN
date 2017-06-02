var express = require('express');
var app = express();

// configurações do express

app.use(express.static('./public'));

module.exports = app;