'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise; //var express = require('express');

_mongoose2.default.connect("mongodb://localhost:27017/cursos", { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  _app2.default.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}).catch(function (error) {
  _app2.default.listen(3000, function () {
    console.log('App error ' + error);
  });
});