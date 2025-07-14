# React Shopping Cart - Project Brief

## Overview
A modern React-based shopping cart application that demonstrates e-commerce functionality with a clean, user-friendly interface. The application fetches product data from an external API and provides full cart management capabilities.

## 🛠️ Technology Stack
- **Frontend Framework**: React 18.2.0
- **State Management**: React Hooks (useReducer, useContext)
- **Styling**: Radium + Custom CSS
- **API**: Fake Store API for product data
- **Build Tool**: Create React App
- **Additional Libraries**: Redux, React-Redux

## 🚀 Key Features
- **Product Catalog**: Dynamically fetches products from Fake Store API
- **Shopping Cart**: Full cart functionality including:
  - Add items to cart
  - Remove individual items
  - Increment/decrement item quantities
  - Clear entire cart
  - Real-time total calculation
- **Responsive Design**: Mobile-friendly interface
- **State Management**: Efficient state handling using React Context API and useReducer

## 📁 Project Structure
```
src/
├── components/
│   ├── cart.jsx           # Main cart container with context provider
│   ├── ContextCart.jsx    # Cart UI component
│   ├── ItemInCart.jsx     # Individual cart item component
│   ├── item.jsx           # Product item component
│   ├── product.jsx        # Product data and definitions
│   ├── Reducer.jsx        # Redux-style reducer for cart state
│   └── cart.css           # Cart-specific styles
├── App.js                 # Main application component
└── index.js               # Application entry point
```

## 🎯 Core Functionality
1. **Product Loading**: Fetches product data from `https://fakestoreapi.com/products`
2. **Cart Operations**: Implements standard e-commerce cart features
3. **Real-time Updates**: Automatic total calculation and item count updates
4. **State Persistence**: Maintains cart state throughout user session

## 🚦 Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📱 User Interface
- Clean, modern shopping cart interface
- Interactive buttons for quantity adjustment
- Visual feedback for cart operations
- Responsive design for various screen sizes
- Custom icons for cart actions (add, remove, increment, decrement)

## 🔧 Development Notes
- Built with Create React App for rapid development
- Uses functional components with React Hooks
- Context API eliminates prop drilling for cart state
- Modular component architecture for maintainability
- External API integration for realistic product data

---

*This is a demonstration project showcasing modern React development practices and e-commerce functionality implementation.*