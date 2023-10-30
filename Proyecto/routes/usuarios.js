const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get('/detalle/:usuarioId', controller.detalle);

router.get('/miperfil', controller.miPerfil);

router.get('/editar', controller.editar);

router.post('/editar', controller.editarPost)

router.get('/buscar/:username',controller.busqueda)

module.exports = router;
