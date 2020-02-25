import express from 'express'
import controller from '../Controllers/ProjectController'
let router = express.Router()


router.get('/home', controller.home);
router.get('/cesde', controller.cesde);

module.exports = router