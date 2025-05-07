import { Router } from 'express';
import { convertirTemperatura } from '../controllers/tempController.js';

const router = Router();

router.get('/temperatura/convertir', convertirTemperatura);

export default router;
