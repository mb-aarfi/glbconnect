import {
  createMessage,
  getMessagesBetweenUsers,
  markMessageAsSeen,
  getUnseenMessages,
} from '../models/messageModel.js';

export const sendMessage = async (req, res) => {
  try {
    const { receiverId, content, isAnonymous } = req.body;
    const senderId = req.user.id; // Get sender ID from authenticated user
    
    const message = await createMessage(senderId, receiverId, content, isAnonymous);
    res.status(201).json(message);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

export const getChatHistory = async (req, res) => {
  try {
    const { user1Id, user2Id } = req.params;
    
    // Ensure user can only access their own messages
    if (user1Id !== req.user.id && user2Id !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to access this chat history' });
    }
    
    const messages = await getMessagesBetweenUsers(user1Id, user2Id);
    res.json(messages);
  } catch (error) {
    console.error('Error getting chat history:', error);
    res.status(500).json({ error: 'Failed to get chat history' });
  }
};

export const markAsSeen = async (req, res) => {
  try {
    const { messageId } = req.params;
    console.log('Attempting to mark message as seen, ID:', messageId);
    
    const message = await markMessageAsSeen(messageId);
    console.log('Message successfully marked as seen:', message);
    
    res.json(message);
  } catch (error) {
    console.error('Error marking message as seen:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    res.status(500).json({ 
      error: 'Failed to mark message as seen',
      details: error.message 
    });
  }
};

export const getUnseen = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Ensure user can only access their own messages
    if (userId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to access these messages' });
    }
    
    const messages = await getUnseenMessages(userId);
    res.json(messages);
  } catch (error) {
    console.error('Error getting unseen messages:', error);
    res.status(500).json({ error: 'Failed to get unseen messages' });
  }
}; 