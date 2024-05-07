import express from "express";
import cors from "cors";
import { authenticateToken } from './middleware/authMiddleware.js';
import { authRoutes } from './routes/authRoutes.js';
import { instanceRoutes } from './routes/instanceRoutes.js';
import { databaseRoutes } from './routes/databaseRoutes.js';
import { userRoutes } from './routes/userRoutes.js'; // Import the userRoutes

const app = express();

// Allow requests from all origins

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/instances', authenticateToken, instanceRoutes);
app.use('/api/databases', databaseRoutes);

// Mount the userRoutes on a specific path
app.use('/api/users', userRoutes);

export { app };
