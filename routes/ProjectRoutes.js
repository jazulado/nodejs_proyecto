const express = require('express');
const controller = require('../controllers/ProjectController');

let router = express.Router();

router.put('/adduser', controller.adduser);
router.get('/listusers', controller.listusers);
router.post('/updateuser',controller.updateuser);
router.delete('/deleteuser',controller.deleteuser);
router.get('/', controller.home);
router.get('/create', controller.create);
router.post('/createuser', controller.createuser);
//router.get('/data', controller.data);

module.exports = router;