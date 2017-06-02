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