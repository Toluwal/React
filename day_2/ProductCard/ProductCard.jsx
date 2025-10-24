
function ProductCard({name, price, image, instock}) {
    return (
        <div className={`product-card ${instock ? 'instock': ''}`}>
            <img src={image} alt= {`${name}image`} className="prod-img" />
            <h2>{name}</h2>
            <p>{price}</p>
            {instock && <div className="inStock-badge">Instock ✓</div>} 

        </div>
    );
}

export default ProductCard;