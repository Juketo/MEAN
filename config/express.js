var express = require('express');
var app = express();

// configurações do express

// através de app.use, podemos usar vários middlewares
app.use(express.static('./public'));

// para deixar as fotos acessíveis no client (via :3000)
// configura o módulo alurapic/config/express.js, criando a URL 
// http://localhost:3000/v1/fotos e retornando uma lista de fotos
app.get('/v1/fotos', function(req, res){

    var fotos = [
        {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
        {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
    ];

    res.json(fotos);
});

// exportando nossa instância do Express
module.exports = app;