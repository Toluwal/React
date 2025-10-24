function CartDisplay({products, onRemoveProduct}) {
    const total = products.reduce((sum, item) => sum + (product.price * product.quantity),0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {products.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
              <>
              {products.map(product => (
                <div key={product.id} className="cart-product">
                    <span>{product.name} x {product.quantity}</span>
                    <span>₦{(product.price * product.quantity).toLocaleString()}</span>
                    <button onClick={() => onRemoveProduct(item.id)}>Remove</button>
                </div> 
              ))}
              <div className="total">
                <strong>Total: ₦{total.toLocaleString()}</strong>
              </div>
              </>  
            )}
        </div>
    );
}