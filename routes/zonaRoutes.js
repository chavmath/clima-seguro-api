const express = require('express');
const router = express.Router();

const ZonaController = require('../controllers/zonaController');

router.post('/zonas', ZonaController.createZona); 
router.get('/zonas', ZonaController.getZonas);
router.get('/zonas/:id', ZonaController.getZonaById);
router.delete('/zonas/:id', ZonaController.deleteZonaById);

module.exports = router;
