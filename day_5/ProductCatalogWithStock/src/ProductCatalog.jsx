import { useState } from 'react';
import './ProductCatalog.css';


const productsData = [
{ name: 'Laptop', price: 450000, inStock: true, category: 'Electronics' },
{ name: 'Phone', price: 150000, inStock: false, category: 'Electronics' },
{ name: 'T-Shirt', price: 5000, inStock: true, category: 'Clothing' },
{ name: 'Jollof Rice', price: 1500, inStock: true, category: 'Food' },
{ name: 'Sneakers', price: 30000, inStock: false, category: 'Clothing' },
];


function ProductCatalog() {
const [category, setCategory] = useState('All');
const [sortOrder, setSortOrder] = useState('');


const filteredProducts = productsData
.filter((product) => category === 'All' || product.category === category)
.sort((a, b) => {
if (sortOrder === 'LowToHigh') return a.price - b.price;
if (sortOrder === 'HighToLow') return b.price - a.price;
return 0;
});


return (
<div className="catalog-container">
<h2>Product Catalog</h2>


<div className="filter-container">
<button onClick={() => setCategory('All')}>All</button>
<button onClick={() => setCategory('Electronics')}>Electronics</button>
<button onClick={() => setCategory('Clothing')}>Clothing</button>
<button onClick={() => setCategory('Food')}>Food</button>
</div>


<div className="sort-container">
<select onChange={(e) => setSortOrder(e.target.value)}>
<option value="">Sort by Price</option>
<option value="LowToHigh">Low to High</option>
<option value="HighToLow">High to Low</option>
</select>
</div>


<ul className="product-list">
{filteredProducts.map((product, index) => (
<li key={index} className={product.inStock ? 'in-stock' : 'out-of-stock'}>
<span>{product.name} - ₦{product.price.toLocaleString()}</span>
{product.inStock ? <button>Add to Cart</button> : <span>OUT OF STOCK</span>}
</li>
))}
</ul>
</div>
);
}


export default ProductCatalog;