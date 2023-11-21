const express = require('express');
const router = express.Router();
const controller = require('../controllers/posteosController')

router.get('/agregar',controller.agregarPost)

router.get('/detalle/:id',controller.detallePost)

router.post('/agregar',controller.nuevoPost)

router.post('/borrar/:id',controller.borrar)

router.post('/editar/:id',controller.edit)

router.post('/comentar/:id', controller.agregarComment)

module.exports = router;