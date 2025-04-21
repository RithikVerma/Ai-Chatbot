import { useState, useEffect } from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Initialize Web Speech API if supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      
      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        
        setInputMessage(transcript);
      };
      
      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn('Speech recognition not supported in this browser');
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const toggleListening = () => {
    if (!recognition) return;
    
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <TextField
        fullWidth
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message here..."
        variant="outlined"
        sx={{ mr: 1 }}
      />
      <IconButton 
        color={isListening ? "error" : "primary"} 
        onClick={toggleListening}
        title={isListening ? "Stop listening" : "Start voice input"}
      >
        {isListening ? <MicOffIcon /> : <MicIcon />}
      </IconButton>
      <IconButton 
        color="primary" 
        type="submit" 
        disabled={!inputMessage.trim()}
        title="Send message"
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInput; 