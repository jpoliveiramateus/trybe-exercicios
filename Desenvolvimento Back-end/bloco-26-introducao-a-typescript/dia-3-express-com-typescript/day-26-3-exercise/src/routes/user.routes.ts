import { Router } from 'express';
import UserController from '../controllers/UserController';

import middleware from '../middlewares/user.middleware';

import auth from '../middlewares/auth.middleware';

const router = Router();

const userController = new UserController();

router.delete('/:id', auth, userController.remove);

router.put('/:id', userController.update);

router.get('/:id', userController.getById);

router.post('/', middleware.validateCreateUser, userController.create);

router.get('/', userController.getAll);

export default router;