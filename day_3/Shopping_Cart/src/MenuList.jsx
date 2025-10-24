function ProductList({onAddProduct}) {
    const productLists = [
        {id:1, name: 'Coke', price: 700},
        {id:2, name: 'Schweppes', price: 700},
        {id:3, name: 'Berry Blast', price: 2000},
        {id:4, name: 'Jack Daniels', price: 15000},
    ];
    return (
        <div className="prod">
            <h2>Product</h2>
            {productLists.map(product => (
                <div Key={product.id} className="product-list">
                    <span>{product.name} - ₦{product.price} </span>
                    <button onClick={() => onAddProduct(product)}>Add to Cart</button>
            </div>
            ))}

        </div>
    );
}