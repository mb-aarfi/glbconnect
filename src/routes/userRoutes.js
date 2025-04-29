import express from 'express';
import { 
  registerUser, 
  loginUser, 
  getUser, 
  getUsers, 
  getCurrentUser 
} from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/me', verifyToken, getCurrentUser);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router; 