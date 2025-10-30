import './App.css'

import { useState } from "react";

function ShoppingCartApp() {
    const [cartProducts, setCartProducts] = useState([
        { id: 1, name: 'Coke', price: '700', quantity: '2'},
        { id: 1, name: 'Berry Blast', price: '2000', quantity: '1'},
        { id: 1, name: 'Jack Daniels', price: '15000', quantity: ''}
    ]);

function handleAddProduct(newProduct) {
    const existingProduct = cartProducts.find(product => product.id ===newProduct.Id);
    if (existingProduct) {
        setCartProducts(cartProducts.map(product => product.id === newProduct.id
            ? {...product, quantity: product.quantity + 1 }
            : product
        ));
    } else {
        setCartProducts([...cartProducts, {...newProduct, quantity:1}]);
    }
}
function handleRemoveProduct(productId) {
    setCartProducts(cartProducts.filter(product => product.id !== productId));
}
return(
    <div className="shoppingCart-cont">
        <h1>Shopping Cart</h1>
        <ProductList onAddProduct={handleAddProduct} />
        <CartDisplay
        products={cartProducts} onRemoveProduct={handleRemoveProduct}/>

    </div>
);
}
export default ShoppingCartApp ;
