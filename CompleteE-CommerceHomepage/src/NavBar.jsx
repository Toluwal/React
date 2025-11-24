import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">NaijaShop</h1>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">Products</a>
        <a href="#" className="hover:text-gray-200">Categories</a>
        <a href="#" className="hover:text-gray-200">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white text-green-700 px-3 py-1 rounded">Login</button>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">☰</button>
      </div>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-green-700 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-green-100 text-center py-20">
      <h2 className="text-4xl font-bold text-green-800">Welcome to NaijaShop</h2>
      <p className="text-gray-700 mt-4">Your one-stop shop for authentic Nigerian products</p>
      <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Shop Now</button>
    </section>
  );
}

function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-3">{name}</h3>
      <p className="text-green-700 font-bold">{price}</p>
      <button className="mt-3 bg-green-700 text-white w-full py-2 rounded hover:bg-green-800">Add to Cart</button>
    </div>
  );
}

function ProductsGrid() {
  const products = [
    { image: "https://via.placeholder.com/150", name: "Jollof Rice", price: "₦1,500" },
    { image: "https://via.placeholder.com/150", name: "Ankara Fabric", price: "₦5,000" },
    { image: "https://via.placeholder.com/150", name: "Suya", price: "₦1,000" },
    { image: "https://via.placeholder.com/150", name: "Aso-Ebi", price: "₦15,000" },
    { image: "https://via.placeholder.com/150", name: "Palm Wine", price: "₦1,200" },
    { image: "https://via.placeholder.com/150", name: "Agbada", price: "₦25,000" },
  ];
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} image={p.image} name={p.name} price={p.price} />
        ))}
      </div>
    </section>
  );
}

function Categories() {
  const categories = ["Food", "Clothing", "Drinks", "Accessories"];
  return (
    <section className="py-12 text-center bg-green-50">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Shop by Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="bg-green-700 text-white px-6 py-3 rounded cursor-pointer hover:bg-green-800">
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-green-800 text-white text-center py-6">
      <p>© 2025 NaijaShop. All rights reserved.</p>
    </footer>
  );
}

function ECommerceHomepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsGrid />
      <Categories />
      <Footer />
    </div>
  );
}

export default ECommerceHomepage;
