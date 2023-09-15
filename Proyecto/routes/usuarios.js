const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get('/detalle/:usuarioId', controller.detalle);
router.get('/miperfil/:usuarioId', controller.miPerfil);
router.get('/editar/:usuarioId', controller.editar)

module.exports = router;
