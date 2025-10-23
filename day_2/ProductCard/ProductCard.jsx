// ## 🎯 Task 2: Product Card

// **Task:** Build a product card for a Nigerian e-commerce site

// **Requirements:**
// 1. Create `ProductCard.jsx`
// 2. Accept props: `name`, `price`, `image`, `inStock`
// 3. Display product image, name, and price
// 4. Show "In Stock" or "Out of Stock" based on `inStock` prop
// 5. Style "In Stock" as green and "Out of Stock" as red
// 6. Create a CSS file for styling
// 7. In `App.jsx`, display 3 different products

// **Sample Output:**
// ```
// [Product Image]
// Laptop Computer
// ₦450,000
// In Stock ✓
function ProductCard(name, price, image, instock) {
    return (
        <div className={`product-card ${instock ? 'instock': ''}`}>
            <img src={image} alt= {`${name}image`} className="prod-img" />
            <h2>{name}</h2>
            <p>{price}</p> 

        </div>
    );
}

export default ProductCard;