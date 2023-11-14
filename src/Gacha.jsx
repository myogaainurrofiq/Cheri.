import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './css/Gacha.css';

const Gacha = () => {
  const [products, setProducts] = useState([]);

  const handleFetchProducts = async () => {
    try {
      const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
      const data = await response.json();

      // Get a random product
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomProduct = {
        name: data[randomIndex].name,
        image_link: data[randomIndex].image_link,
        brand: data[randomIndex].brand,
        price: data[randomIndex].price,
        hex_value: data[randomIndex].product_colors[0].hex_value,
      };

      setProducts([randomProduct]);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = () => {
    setProducts([]);
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };

  return (
    <div>
      <Navbar />
      <h1>Get Promo</h1>
      {products.length > 0 ? (
        <div>
          <div className="card-container">
            {products.map((product, index) => (
              <div key={index} className="card-link">
                <div className='card'>
                  <img src={product.image_link} alt={product.name} className="product-image" />
                  <div className='card-details'>
                    <h3>Name: {product.name}</h3>
                    <p>Brand: {product.brand}</p>
                    <p>Price: {product.price}</p>
                    <div className="color-box" style={{ backgroundColor: product.hex_value }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="button-container2">
            <button onClick={handleDeleteAll} className="delete-all-button">
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className='m'>
        <m>Test your luck by pressing the gacha button below to get a discount.</m>
        </div>
      )}
      <div className="button-container">
        <button onClick={handleFetchProducts} className="fetch-button">
          Gacha
        </button>
      </div>
    </div>
  );
};

export default Gacha;