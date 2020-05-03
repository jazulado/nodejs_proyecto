const express = require('express');
const controller = require('../controllers/ProjectController');

let router = express.Router();


router.get('/', controller.home);
router.get('/create', controller.create);
router.post('/createpatient', controller.createpatient);
router.post('/delete', controller.delete);
router.post('/edit', controller.edit);
router.post('/editpatient', controller.editpatient);

module.exports = router;