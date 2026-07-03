const express= require('express');
const app= express();
app.get('/', (req, res) => {
  res.send('welcome to shop management system API');
});


app.get('/products', (req, res) => {
    console.log(req.query);
    
  res.send(req.query);
});


app.get('/customers', (req, res) => { 
  res.send('List of customers');
});

module.exports= app;