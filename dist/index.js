'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //var express = require('express');


app.get('/api', function (req, res) {
  var nombre = "julian";
  var apellido = "usuga";
  res.send('El nombre es: ' + nombre + ' y apellido ' + apellido);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//git push -u origin master
//cmdkey /delete:LegacyGeneric:target=git:https://github.com