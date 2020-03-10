import express from 'express'
import controller from '../Controllers/ProjectController'
let router = express.Router()


router.get('/home', controller.home);
router.get('/cesde', controller.cesde);
router.post('/alumnos', controller.alumnos);
router.post('/formulario', controller.formulario);
router.post('/producto', controller.producto);
router.post('/usuario', controller.usuario);

module.exports = router