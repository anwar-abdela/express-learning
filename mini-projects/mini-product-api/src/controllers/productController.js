const products = require('../data/products');
const getProducts = (req, res) =>{

    res.json(products);
};

const getProductById =(req, res)=>{
    const productsId = parseInt(req.params.id, 10);
    const product =products.find(p=> p.id ===productsId);
    if (product){
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const searchProducts =( req, res) =>{
    const searchName = req.query.name;

    if (!searchName){
        return res.status(400).json({error: 'please provide a name to search for'});
    };
    const product = products.find(p => p.name.toLowerCase() === searchName.toLowerCase());
    if (product){
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const createProduct = (req,res) =>{
    const {name, price} = req.body;
    if(!name || !price){
        return res.status(400).json({ error: 'please provide both name and price'});
    }
    const newProduct = {
        id: products.length +1,
        name,
        price
    }
    products.push(newProduct);
    res.status(201).json(newProduct);
};
const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const { name, price } = req.body;
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'product not found' }); 
    }
    if (name !== undefined) {
        product.name = name;
    } 
    if (price !== undefined) {
        product.price = price;
    }
    res.json(product);
};

const deleteProduct =(req, res) =>{
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if(!product){
        return res.status(404).json({error: 'product not found'});
    }
    products.splice(products.indexOf(product), 1);
    res.status (200).json({message: 'product deleted successfully'});

};

module. exports = {
     getProducts ,
     getProductById,
     searchProducts ,
     createProduct,
     updateProduct,
     deleteProduct
    };