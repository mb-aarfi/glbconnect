import express from 'express';
import {
  sendMessage,
  getChatHistory,
  markAsSeen,
  getUnseen,
} from '../controllers/messageController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// Send a new message
router.post('/send', sendMessage);

// Get chat history between two users
router.get('/history/:user1Id/:user2Id', getChatHistory);

// Mark a message as seen
router.put('/seen/:messageId', markAsSeen);

// Get all unseen messages for a user
router.get('/unseen/:userId', getUnseen);

export default router; 