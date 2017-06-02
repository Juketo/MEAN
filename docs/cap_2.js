// montar o server.js

'npm init'

// criar as rotas -> express (framework web do node) cuida disso
// ele automaticamente compartilha os arquivos de um determinado local
'npm install express@4.13.3 --save'
// usa a versao 4.13.3 do treinamento... depois se quiser pode atualizar
// create -> /config/express.js
// no server.js, adiciona
var app = require('./config/express');
http.createServer(app)

// configura o primeiro middleware, para expor a pasta a ser exposta
app.use(express.static('./public'));

// ---------------------------------

// PARSER: receber uma string e tirar dela o que precisa
// ex: url inteira, tira a última parte
var indice = req.url.indexOf('=');
var parametro = req.url.substring(indice+1);
res.end(parametro);

// ----------------------------------

// todo arquivo dentro de node_modules pode ser acessado através da função 
// require, só passando o nome do módulo. Por isso temos:
var express = require('express');

// ----------------------------------

'./'  // para buscar na mesma pasta
'../' // para voltar pra cima

alurapic/z.js
alurapic/config/b.js
alurapic/app/c.js
alurapic/x/y/d.js

// módulo b.js
require('../app/c');
// módulo b.js
require('../app/c');
// módulo b.js
require('./app/c');
// módulo c.js
require('../x/y/d');
// módulo c.js
require('../x/y/d');
// módulo z importando b
require('./b');
// módulo z.js importando b.js
require('./config/b');

