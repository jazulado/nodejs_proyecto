import express from 'express'
import controller from '../Controllers/ProjectController'
let router = express.Router()


router.get('/', controller.home);
router.get('/cesde', controller.cesde);

module.exports = router