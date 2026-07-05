const express = require('express');
const products = require('./data/products');
const {getproducts, getProductById} = require('./controllers/productController');
const productRoutes = require('./routes/productRoutes');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/products', productRoutes);


module.exports = app;