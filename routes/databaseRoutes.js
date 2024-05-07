import express from 'express';
import { Router } from 'express';
import { addDatabase, getDatabases, deleteDatabase } from '../controllers/DatabaseController.js';

const router = Router();

router.post('/', addDatabase);
router.get('/', getDatabases);
router.delete('/:id', deleteDatabase);

export {router as databaseRoutes};
