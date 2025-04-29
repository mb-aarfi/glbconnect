import { io } from 'socket.io-client';

let socket;
// Keep track of recently received message IDs to prevent duplicates
const messageCache = new Set();
const MAX_CACHE_SIZE = 100;

export const initializeSocket = (userId) => {
  if (!socket) {
    socket = io('http://localhost:5000', {
      withCredentials: false,
    });
  }

  // Connect and identify the user
  socket.connect();
  socket.emit('join', userId);

  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};

export const sendMessage = (data) => {
  if (socket) {
    socket.emit('send_message', data);
  }
};

// Function to add message to cache to prevent duplicates
const addToMessageCache = (messageId) => {
  messageCache.add(messageId);
  
  // Keep cache size reasonable by removing oldest entries
  if (messageCache.size > MAX_CACHE_SIZE) {
    const iterator = messageCache.values();
    messageCache.delete(iterator.next().value);
  }
};

// Function to check if message is already in cache
const isMessageCached = (messageId) => {
  return messageCache.has(messageId);
};

export const listenForMessages = (callback) => {
  if (socket) {
    // Remove any existing listeners first to prevent duplicates
    socket.off('receive_message');
    socket.on('receive_message', (message) => {
      // Only process message if it's not already cached
      if (message.id && !isMessageCached(message.id)) {
        // Add to cache to prevent processing again
        addToMessageCache(message.id);
        callback(message);
      }
    });
  }
};

export const listenForTyping = (callback) => {
  if (socket) {
    // Remove any existing listeners first to prevent duplicates
    socket.off('user_typing');
    socket.on('user_typing', (data) => {
      callback(data);
    });
  }
};

export const emitTyping = (data) => {
  if (socket) {
    socket.emit('typing', data);
  }
};

export const removeAllListeners = () => {
  if (socket) {
    socket.off();
  }
};

export const clearMessageCache = () => {
  messageCache.clear();
};

export const getSocket = () => socket;

export default {
  initializeSocket,
  disconnectSocket,
  sendMessage,
  listenForMessages,
  listenForTyping,
  emitTyping,
  removeAllListeners,
  clearMessageCache,
  getSocket
}; 