import { Server } from 'socket.io';
import { createMessage } from '../models/messageModel.js';
import { verifyToken } from '../middleware/auth.js';

let ioInstance;

export const initializeSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
  });

  // Store io instance globally
  ioInstance = io;

  // Authentication middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication error'));
      }
      
      const decoded = await verifyToken(token);
      socket.userId = decoded.userId;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.userId);
    
    // Join anonymous chat room
    socket.join('anonymous-chat');

    // Handle private messages
    socket.on('private-message', (data) => {
      const room = [data.senderId, data.receiverId].sort().join('-');
      io.to(room).emit('private-message', data);
    });

    // Handle anonymous messages
    socket.on('anonymous-message', (message) => {
      io.to('anonymous-chat').emit('anonymous-message', message);
    });

    // Handle user joining
    socket.on('join', (userId) => {
      io.to(userId).emit('user_joined');
    });

    // Handle new message
    socket.on('send_message', async (data) => {
      try {
        const { senderId, receiverId, content, isAnonymous } = data;
        const message = await createMessage(senderId, receiverId, content, isAnonymous);

        // Send to receiver if online
        io.to(receiverId).emit('receive_message', message);

        // Send confirmation back to sender
        socket.emit('message_sent', message);
      } catch (error) {
        console.error('Error handling message:', error);
        socket.emit('message_error', { error: 'Failed to send message' });
      }
    });

    // Handle typing status
    socket.on('typing', ({ senderId, receiverId }) => {
      io.to(receiverId).emit('user_typing', { senderId });
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.userId);
      socket.leave('anonymous-chat');
    });
  });

  return io;
};

// Helper function to get io instance
export const getIO = () => {
  if (!ioInstance) {
    throw new Error('Socket.io not initialized');
  }
  return ioInstance;
};

export default {
  initializeSocket,
  getIO
}; 