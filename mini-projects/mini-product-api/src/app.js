const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const products = [
  { "id": 1, "name": "Laptop", "price": 900 },
  { "id": 2, "name": "Phone", "price": 600 },
  { "id": 3, "name": "Keyboard", "price": 50 },
  { "id": 4, "name": "Mouse", "price": 30 },
  { "id": 5, "name": "Monitor", "price": 250 }
]

app.get('/products', (req, res) => {
  res.json(products);
});


app.get('/products/search', (req, res) => {
    const searchName = req.query.name;

    if (!searchName){
        return res.status(400).json({error: 'please provide aa name to search for'});
    }

    const product= products.find(
        p => p.name.toLowerCase() === searchName.toLowerCase()
    );
    if(product){
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});
app.get('/products/:id', (req, res) =>{
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p=> p.id ===productId);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});


module.exports = app;