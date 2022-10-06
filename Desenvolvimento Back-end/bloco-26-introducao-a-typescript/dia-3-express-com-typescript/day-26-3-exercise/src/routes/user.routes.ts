import { Router } from 'express';
import UserController from '../controllers/UserController';

import middleware from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.delete('/:id', userController.remove);

router.put('/:id', userController.update);

router.get('/:id', userController.getById);

router.post('/', middleware.validateCreateUser, userController.create);

router.get('/', userController.getAll);

export default router;