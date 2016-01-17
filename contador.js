// Importar el modulo 'fs' de node
var fs = require('fs');

// Leer el archivo votos.txt y ejecutar una funcion cuando ah leido el archivo
fs.readFile('votos.txt', function (err, dataBuffer) {

  // Convertir el archivo leido en una cadena de texto:
  var dataTexto = dataBuffer.toString();
  // Dividir el archivo de texto en un array que contiene cada linea del archivo
  var lineas = dataTexto.split('\n');
  // Inicializar una variable que contiene los resultados
  var resultado = {};

  // Iterar por cada linea del archivo
  lineas.forEach(function(linea) {
    // Dividir cada linea en palabras por separado
    var  palabras = linea.split(' ');

    // Si la primera palabra tiene un valor
    if (palabras[0]){
      // Almacenar el nombre y el numero de votos en dos variables
      var nombre = palabras[0];
      var numero = parseInt(palabras[1]);

      // Si es la primera vez que lee este nombre , agregar el numero de votos
      if (!resultado[nombre]) {
        resultado[nombre] = numero;
      } else {
      // Sino agregar al resultado que tiene el numero de votos de esta linea
        resultado[nombre] += numero;
      }
    }
  });

  // Imprimir el resultado en la consola
  console.log(resultado);

});
