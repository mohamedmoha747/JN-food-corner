# Food Ordering Website

A modern, static food-ordering website built with React, HTML, CSS, and JavaScript. Order food items and place orders directly via WhatsApp.

## Features

- 🍕 Beautiful menu display with food images
- 🛒 Interactive shopping cart
- 📱 Quantity selectors for each item
- 💬 WhatsApp integration for order placement
- 📱 Fully responsive design
- 🎨 Modern, clean UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## How It Works

1. Browse the menu and select quantities for items you want to order
2. Click "Add to Cart" to add items to your cart
3. Review your cart and modify quantities if needed
4. Click "Place Order via WhatsApp" to open WhatsApp with your order details
5. The order message will be pre-filled and ready to send to +91 94879 02634

## Technologies Used

- React 18
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

```
Food-app-using-react/
├── src/
│   ├── components/
│   │   ├── FoodItem.jsx
│   │   └── Cart.jsx
│   ├── data/
│   │   └── foodItems.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT

