import express from 'express';
const router = express.Router();
import { register, login, changePassword } from '../controllers/AuthController.js';

router.post('/register', register);
router.post('/login', login);
router.put('/:userId/password', changePassword);

export { router as authRoutes };
