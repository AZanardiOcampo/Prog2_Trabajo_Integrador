const express = require('express');
const router = express.Router();
const controlador = require('../controllers/indexController')

/* GET home page. */
router.get('/', controlador.index);

module.exports = router;
