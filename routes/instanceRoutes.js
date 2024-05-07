import express from 'express';
const router = express.Router();
import { addInstance, getInstances } from '../controllers/InstanceController.js';

router.post('/', addInstance);
router.get('/', getInstances);

export { router as instanceRoutes };