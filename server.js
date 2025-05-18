import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import messageRouter from './src/routes/messageRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import batchRouter from './src/routes/batchroute.js';
import anonymousRouter from './src/routes/anonymousMessageRoutes.js';
import { initializeSocket } from './src/sockets/chatSocket.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Attach app to httpServer for socket.io
httpServer.app = app;

// Initialize Socket.io
const io = initializeSocket(httpServer);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, 'client/dist')));

// Routes
app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);
app.use('/api/batch', batchRouter);
app.use('/api/anonymous-messages', anonymousRouter);

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






