const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarioController")

router.get('/detalle/usuarioId:', controller.detalle);


module.exports = router;
