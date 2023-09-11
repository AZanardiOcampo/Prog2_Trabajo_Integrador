const express = require('express');
const router = express.Router();
const controlador = require('../controllers/indexController')

/* GET home page. */
router.get('/', controlador.index);
router.get('/registro', controlador.registro);
router.get('/login',controlador.login);

module.exports = router;
