const express = require('express');
const router = express.Router();
const zonaController = require('../controllers/zonaController');

router.post('/zonas', zonaController.createZona);
router.get('/zonas', zonaController.getZonas);
router.get('/zonas/:id', zonaController.getZonaById);
router.delete('/zonas/:id', zonaController.deleteZona);

module.exports = router;
