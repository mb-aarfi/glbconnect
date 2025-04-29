import React from 'react';
import { Link } from 'react-router-dom';

const MessageList = ({ conversations, activeUserId, onSelectConversation }) => {
  if (!conversations || conversations.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6">
        <div className="rounded-full bg-gray-100 p-3">
          <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No conversations yet</h3>
        <p className="mt-1 text-center text-gray-500">
          Start a new conversation to connect with others.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 overflow-y-auto">
      {conversations.map((conversation) => {
        const isActive = conversation.userId === activeUserId;
        const hasUnread = conversation.unreadCount > 0;
        
        return (
          <div
            key={conversation.userId}
            onClick={() => onSelectConversation(conversation.userId, conversation)}
            className={`block cursor-pointer transition-colors hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''}`}
          >
            <div className="flex items-center p-4">
              {conversation.isAnonymous ? (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  {conversation.name ? conversation.name.charAt(0).toUpperCase() : '?'}
                </div>
              )}
              
              <div className="ml-4 flex-1">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-medium text-gray-900 truncate">
                    {conversation.isAnonymous ? 'Anonymous User' : conversation.name}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {conversation.lastMessageTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mt-1 text-sm text-gray-600 truncate">
                    {conversation.lastMessage}
                  </p>
                  {hasUnread && (
                    <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList; 