import React from 'react';

const MessageBubble = ({ message, isOwn }) => {
  const formattedTime = message.timestamp ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  
  // Render message status indicator
  const renderMessageStatus = () => {
    if (!isOwn) return null;
    
    // Message is still sending (temporary ID)
    if (message.id && message.id.toString().startsWith('temp-')) {
      return (
        <span className="ml-2">
          <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
      );
    }
    
    // Message delivered but not seen
    if (!message.seen) {
      return (
        <span className="ml-2">
          <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
          </svg>
        </span>
      );
    }
    
    // Message seen
    return (
      <span className="ml-2">
        <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 12.75l6 6 15-15" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" />
        </svg>
      </span>
    );
  };
  
  return (
    <div className={`flex w-full mb-3 ${isOwn ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar for other user's messages */}
      {!isOwn && (
        <div className="mr-2 flex-shrink-0 self-end">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-gray-600">
            {message.sender?.name ? message.sender.name.charAt(0).toUpperCase() : 'A'}
          </div>
        </div>
      )}
      
      <div className={`flex max-w-[75%] flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
        {!isOwn && message.isAnonymous && (
          <span className="mb-1 text-xs font-medium text-gray-500">Anonymous</span>
        )}
        
        {!isOwn && !message.isAnonymous && message.sender && (
          <span className="mb-1 text-xs font-medium text-gray-700">{message.sender.name}</span>
        )}
        
        <div
          className={`rounded-lg px-4 py-2 shadow-sm ${
            isOwn
              ? 'bg-primary text-white rounded-tr-none'
              : 'bg-gray-100 text-gray-900 rounded-tl-none'
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </div>
        
        <div className="mt-1 flex items-center text-xs text-gray-500">
          <span>{formattedTime}</span>
          {renderMessageStatus()}
        </div>
      </div>
      
      {/* Avatar for own messages */}
      {isOwn && (
        <div className="ml-2 flex-shrink-0 self-end">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            {message.sender?.name ? message.sender.name.charAt(0).toUpperCase() : 'Y'}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble; 