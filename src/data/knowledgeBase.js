// Custom knowledge base for the restaurant chatbot
export const knowledgeBase = {
  // General information
  company: {
    name: "Tasty Bites Restaurant",
    description: "A cozy family restaurant serving delicious homemade meals since 1995",
    services: [
      "Dine-in",
      "Takeout",
      "Catering",
      "Private Events"
    ],
    contact: {
      email: "info@tastybites.com",
      phone: "+1 555 123 4567",
      address: "123 Food Street, Cuisine City, FC 12345"
    }
  },

  // FAQ section
  faq: [
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Friday from 11:00 AM to 10:00 PM, Saturday from 10:00 AM to 11:00 PM, and Sunday from 10:00 AM to 9:00 PM."
    },
    {
      question: "Do you take reservations?",
      answer: "Yes, we accept reservations! You can call us at +1 555 123 4567 or book online through our website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, cash, and digital payments like Apple Pay and Google Pay."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Yes, we have a wide variety of vegetarian dishes. Our menu includes several vegetarian appetizers, main courses, and salads."
    }
  ],

  // Menu items
  products: [
    {
      name: "Classic Burger",
      description: "Our signature beef patty with fresh lettuce, tomatoes, and special sauce",
      price: "$12.99",
      features: ["100% beef", "Fresh vegetables", "Homemade sauce"]
    },
    {
      name: "Margherita Pizza",
      description: "Traditional Italian pizza with fresh mozzarella and basil",
      price: "$14.99",
      features: ["Fresh mozzarella", "Fresh basil", "Homemade tomato sauce"]
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, and croutons with our house-made dressing",
      price: "$9.99",
      features: ["Fresh romaine", "Parmesan", "Homemade dressing"]
    }
  ],

  // Custom responses for specific keywords
  responses: {
    greeting: [
      "Hello! Welcome to Tasty Bites. How can I help you today?",
      "Hi there! Looking for some delicious food?",
      "Welcome to Tasty Bites! What would you like to know about our menu?"
    ],
    goodbye: [
      "Thank you for choosing Tasty Bites! Have a great day!",
      "Goodbye! We hope to serve you soon!",
      "Take care! Come back soon for more delicious food!"
    ],
    thanks: [
      "You're welcome! Enjoy your meal!",
      "Glad I could help!",
      "My pleasure! Let me know if you need anything else!"
    ],
    default: [
      "I'm not sure about that. Would you like to know about our menu or make a reservation?",
      "I don't have information about that. Would you like to know about our opening hours or menu?",
      "I'm still learning about that. Could you ask about our menu, reservations, or opening hours?"
    ]
  }
};

// Helper function to find relevant information
export const findRelevantInfo = (query) => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check FAQ
  const faqMatch = knowledgeBase.faq.find(item => 
    item.question.toLowerCase().includes(lowercaseQuery) ||
    item.answer.toLowerCase().includes(lowercaseQuery)
  );
  if (faqMatch) return faqMatch.answer;

  // Check menu items
  const productMatch = knowledgeBase.products.find(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
  if (productMatch) {
    return `${productMatch.name}: ${productMatch.description}. Price: ${productMatch.price}. Features: ${productMatch.features.join(', ')}`;
  }

  // Check company information
  if (lowercaseQuery.includes('restaurant') || lowercaseQuery.includes('about')) {
    return `${knowledgeBase.company.name}: ${knowledgeBase.company.description}`;
  }

  // Check contact information
  if (lowercaseQuery.includes('contact') || lowercaseQuery.includes('reach') || lowercaseQuery.includes('reservation')) {
    return `You can contact us at: Email: ${knowledgeBase.company.contact.email}, Phone: ${knowledgeBase.company.contact.phone}, Address: ${knowledgeBase.company.contact.address}`;
  }

  // Check greetings
  if (lowercaseQuery.match(/^(hi|hello|hey|greetings)/)) {
    return knowledgeBase.responses.greeting[Math.floor(Math.random() * knowledgeBase.responses.greeting.length)];
  }

  // Check goodbyes
  if (lowercaseQuery.match(/^(bye|goodbye|see you|farewell)/)) {
    return knowledgeBase.responses.goodbye[Math.floor(Math.random() * knowledgeBase.responses.goodbye.length)];
  }

  // Check thanks
  if (lowercaseQuery.match(/^(thanks|thank you|appreciate it)/)) {
    return knowledgeBase.responses.thanks[Math.floor(Math.random() * knowledgeBase.responses.thanks.length)];
  }

  // Default response if no match found
  return knowledgeBase.responses.default[Math.floor(Math.random() * knowledgeBase.responses.default.length)];
}; 