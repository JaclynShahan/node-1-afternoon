const express = require('express');

const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const port = 3001;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

 
