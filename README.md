# Custom Knowledge Base Chatbot

A modern chatbot application built with React and Material UI that uses a custom knowledge base to provide intelligent responses. Perfect for businesses, customer support, or any domain-specific information delivery.

## Features

- 💬 Text-based chat interface
- 🎤 Voice input using Web Speech API
- 🔊 Text-to-speech for responses
- 📱 Responsive design that works on desktop and mobile
- 🧠 Custom knowledge base for domain-specific responses

## Prerequisites

- Node.js (v14 or newer)

## Getting Started

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

## Customization

### Knowledge Base
The chatbot's responses are based on the knowledge base defined in `src/data/knowledgeBase.js`. You can customize:

1. Company Information:
   ```javascript
   company: {
     name: "Your Company Name",
     description: "Your company description",
     services: ["Service 1", "Service 2"],
     contact: {
       email: "contact@company.com",
       phone: "123-456-7890",
       address: "Your Address"
     }
   }
   ```

2. FAQ Section:
   ```javascript
   faq: [
     {
       question: "Your question?",
       answer: "Your answer"
     }
   ]
   ```

3. Products/Services:
   ```javascript
   products: [
     {
       name: "Product Name",
       description: "Product description",
       price: "$XX.XX",
       features: ["Feature 1", "Feature 2"]
     }
   ]
   ```

4. Custom Responses:
   ```javascript
   responses: {
     greeting: ["Hello!", "Hi there!"],
     goodbye: ["Goodbye!", "See you later!"],
     thanks: ["You're welcome!", "Glad to help!"],
     default: ["Default response 1", "Default response 2"]
   }
   ```

### Styling
You can customize the appearance by modifying:
- `src/App.css` for general styles
- Material UI theme in `src/App.jsx`
- Component-specific styles in their respective files

## Browser Compatibility

The voice features use the Web Speech API, which is supported in most modern browsers:
- Chrome/Edge: Full support for voice input and text-to-speech
- Firefox: Text-to-speech works, but voice input may require enabling flags
- Safari: Variable support, check latest browser version

## License

MIT
