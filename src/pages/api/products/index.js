import productsData from '../../../data/products.json';

const products = (req, res) => res.json(productsData);

export default products;
