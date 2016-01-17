var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomID = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomCont = faker.lorem.sentence();
  var randomDate = faker.date.recent();
  var randomImg =faker.image.people();
  return {
    id: randomID,
    name: randomName,
    contend: randomCont,
    date: randomDate,
    img: randomImg,
  }
}
app.get('/post', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);
