import { useState, useRef, useEffect } from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { findRelevantInfo } from '../data/knowledgeBase';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (content) => {
    if (!content.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get response from knowledge base
      const response = findRelevantInfo(content);
      
      // Add AI response to chat
      const aiMessage = { 
        role: 'assistant', 
        content: response 
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // Optional: Text-to-speech
      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(aiMessage.content);
        window.speechSynthesis.speak(speech);
      }
    } catch (err) {
      console.error('Error processing message:', err);
      setError('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        width: '100%', 
        maxWidth: 600, 
        mx: 'auto', 
        height: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="h6">Custom Knowledge Base Assistant</Typography>
      </Box>
      
      <Box 
        sx={{ 
          flex: 1, 
          p: 2, 
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
        
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        
        <div ref={messagesEndRef} />
      </Box>
      
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <ChatInput onSendMessage={handleSendMessage} />
      </Box>
    </Paper>
  );
};

export default ChatContainer; 