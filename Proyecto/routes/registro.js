const express = require('express');
const router = express.Router();
const controlador = require('../controllers/indexController')

/* GET home page. */
router.get('/', controlador.index);

router.post('/', controlador.index);

router.get('/registro', controlador.registro);

router.post('/registro', controlador.registroPost);

router.get('/login',controlador.login);

router.post('/login',controlador.loginPost);



module.exports = router;
