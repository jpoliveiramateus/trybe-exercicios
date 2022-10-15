import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import PlantRepository from '../models/repository/PlantRepository';
import PlantService from '../services/PlantService';

const router = Router();
const repository = new PlantRepository();
const service = new PlantService(repository);
const controller = new PlantController(service);

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.delete('/:id', controller.removeById);

router.put('/:id', controller.updateById);

export default router;