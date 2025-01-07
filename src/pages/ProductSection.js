import React, { useState, useEffect } from "react";
import "./ProductSection.css";
import { useCart } from "../component/CartContext";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();

        setProducts(data.slice(0, -10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-section container-xxl container-xl container-lg container-md container-sm">
      <h2>Best Seller</h2>


      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <button
              className="product-button"
              onClick={() => handleAddToCart(product)}
              // onClick={() => console.log(`Added ${product.title} to cart`)}
            >
              Buy Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
