'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectController = require('../Controllers/ProjectController');

var _ProjectController2 = _interopRequireDefault(_ProjectController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/home', _ProjectController2.default.home);
router.get('/cesde', _ProjectController2.default.cesde);

module.exports = router;