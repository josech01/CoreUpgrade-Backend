var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Mi primer servidor!');
})

app.get('/perfil', function (req, res) {
  res.send('Mi perfil!');
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})

app.listen(3000);
