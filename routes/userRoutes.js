import express from 'express';
import { createUser, getUsers, deleteUser, assignRole } from '../controllers/UserController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
router.post('/:userId/assignRole', assignRole);

export { router as userRoutes };
