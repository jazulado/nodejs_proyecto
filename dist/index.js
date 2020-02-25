'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var express = require('express');
var app = (0, _express2.default)();

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://localhost:27017/cursos", { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  app.get('/', function (req, res) {
    var nombre = "julian";
    var apellido = "usuga";
    res.send('El nombre es: ' + nombre + ' y apellido ' + apellido);
  });
}).catch(function (error) {
  app.listen(3000, function () {
    console.log('App error ' + error);
  });
});
app.get('/api', function (req, res) {
  var nombre = "julian";
  var apellido = "usuga";
  res.send('El nombre es: ' + nombre + ' y apellido ' + apellido);
});

//git push -u origin master
//cmdkey /delete:LegacyGeneric:target=git:https://github.com