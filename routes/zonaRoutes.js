const express = require('express');
const router = express.Router();
const zonaController = require('../controllers/zonaController');

// Ruta para crear una nueva zona agrícola
router.post('/zonas', zonaController.createZona);

// Ruta para obtener todas las zonas agrícolas
router.get('/zonas', zonaController.getZonas);

// Ruta para obtener una zona agrícola específica por ID
router.get('/zonas/:id', zonaController.getZonaById);

// Ruta para eliminar una zona agrícola por ID
router.delete('/zonas/:id', zonaController.deleteZona);

module.exports = router;
