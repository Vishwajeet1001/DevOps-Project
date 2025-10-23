const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple e-commerce API endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'E-commerce App is Running', timestamp: new Date() });
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Headphones', price: 149.99, category: 'Electronics' },
    { id: 3, name: 'T-Shirt', price: 29.99, category: 'Clothing' },
    { id: 4, name: 'Running Shoes', price: 89.99, category: 'Footwear' }
  ]);
});

app.get('/api/cart', (req, res) => {
  res.json({ items: [], total: 0 });
});

app.post('/api/order', (req, res) => {
  res.json({ message: 'Order placed successfully', orderId: '12345' });
});

app.listen(PORT, () => {
  console.log(`🚀 E-commerce application running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📦 Products: http://localhost:${PORT}/api/products`);
});
