'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectController = require('../Controllers/ProjectController');

var _ProjectController2 = _interopRequireDefault(_ProjectController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/home', _ProjectController2.default.home);
router.get('/cesde', _ProjectController2.default.cesde);
router.post('/alumnos', _ProjectController2.default.alumnos);
router.post('/formulario', _ProjectController2.default.formulario);
router.post('/producto', _ProjectController2.default.producto);
router.post('/usuario', _ProjectController2.default.usuario);

module.exports = router;