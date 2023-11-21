const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get('/detalle/:usuarioId', controller.detalle);

router.get('/miperfil', controller.miPerfil);

router.get('/editarPerfil', controller.editar);

router.post('/editarPerfil', controller.editarPost)

router.get("/logout", controller.logout)

module.exports = router;
