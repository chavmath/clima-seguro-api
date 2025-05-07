import { Router } from 'express';
import {
  createZona,
  getZonas,
  getZonaById,
  deleteZonaById
} from '../controllers/zonaController.js';

const router = Router();

router.post('/zonas', createZona); 
router.get('/zonas', getZonas);
router.get('/zonas/:id', getZonaById);
router.delete('/zonas/:id', deleteZonaById);

export default router;
