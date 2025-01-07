import React, { useState, useEffect } from "react";
import "./homeproduct.css";
import { useCart } from "../component/CartContext";

const Homeproduct = () => {
  const [products, setProducts] = useState([]);
  const {addToCart} = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
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

  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);

  return (
    <div>
      <div className="product-row container-xxl container-xl container-lg container-md container-sm">
        <h2 className="row-title">Best Selling</h2>
        <div className="product-container">
          {firstRow.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <br/>
        <h2 className="row-title">Trending Products</h2>
        <div className="product-container">
          {secondRow.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homeproduct;


