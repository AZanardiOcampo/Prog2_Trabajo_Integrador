const express = require('express');
const router = express.Router();
const controller = require('../controllers/posteosController')

router.get('/agregar',controller.agregarPost)

router.get('/detalle/:id',controller.detallePost)


module.exports = router;