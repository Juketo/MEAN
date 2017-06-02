var express = require('express');
var app = express();

// configurações do express

// através de app.use, podemos usar vários middlewares
app.use(express.static('./public'));

// exportando nossa instância do Express
module.exports = app;