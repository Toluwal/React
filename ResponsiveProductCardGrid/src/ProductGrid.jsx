import ProductCard from "./ProductCard";
function ProductGrid() {
  const products = [
    { title: "Jollof Rice", price: "₦1,500", image: "https://images.unsplash.com/photo-1608889175123-8f30a7e6b89c?auto=format&fit=crop&w=400&q=80" },
    { title: "Ankara Fabric", price: "₦5,000", image: "https://images.unsplash.com/photo-1629979114492-cc66b2fdf75d?auto=format&fit=crop&w=400&q=80" },
    { title: "Suya", price: "₦1,000", image: "https://images.unsplash.com/photo-1601050690597-df7e1dcbec6b?auto=format&fit=crop&w=400&q=80" },
    { title: "Aso-Ebi", price: "₦15,000", image: "https://images.unsplash.com/photo-1622782914767-9b26cf2f1d70?auto=format&fit=crop&w=400&q=80" },
    { title: "Palm Wine", price: "₦1,200", image: "https://images.unsplash.com/photo-1621996346568-bac5818c3b1b?auto=format&fit=crop&w=400&q=80" },
    { title: "Agbada", price: "₦25,000", image: "https://images.unsplash.com/photo-1604079628042-94302c1cb80d?auto=format&fit=crop&w=400&q=80" },
    { title: "Chin Chin", price: "₦500", image: "https://images.unsplash.com/photo-1620662730481-2a918b24f152?auto=format&fit=crop&w=400&q=80" },
    { title: "Puff Puff", price: "₦300", image: "https://images.unsplash.com/photo-1617196036117-0ec32b9cbda3?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Nigerian Market Products
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
