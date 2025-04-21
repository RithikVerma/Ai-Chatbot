import React from 'react';

const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        <div className="message-avatar">
          {isUser ? '👤' : '🤖'}
        </div>
        <div className="message-text">
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 