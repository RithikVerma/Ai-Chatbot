import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Typography } from '@mui/material';
import ChatContainer from './components/ChatContainer';
import './App.css'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="app-container">
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Knowledge Base Assistant
        </Typography>
        <ChatContainer />
      </Container>
    </ThemeProvider>
  )
}

export default App
