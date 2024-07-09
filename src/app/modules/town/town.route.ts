// src/routes/ad.routes.ts

import { Router } from 'express';
import { TownController } from './town.controller';

const router = Router();

router.post('/', TownController.createTown);
router.get('/:id', TownController.getTownById);
router.get('/', TownController.getAllTown);
router.put('/:id', TownController.updateTownById);
router.delete('/:id', TownController.deleteTownById);

export const TownRouter = router;
