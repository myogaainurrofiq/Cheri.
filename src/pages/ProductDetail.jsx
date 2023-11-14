import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/ProductDetail.css';
import Navbar from '../components/Navbar';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Fungsi untuk membuat gambar warna dari hex code
  const getColorImage = (hexColor) => (
    <div
      className="color-image"
      style={{ backgroundColor: hexColor, width: '30px', height: '30px' }}
    ></div>
  );

  return (
    <div>
    <div><Navbar></Navbar></div>
    <div className="product-detail-container">
      <h1>{product.name}</h1>
      <hr></hr>
      <img
        src={product.image_link}
        alt={product.name}
        className="product-detail-image"
      />
      <p className="product-detail-price">Price: ${product.price}</p>
      <p className="product-detail-description">Brand: {product.brand}</p>
      <p className="product-detail-description">Type: {product.product_type}</p>
      <p className="product-detail-description">Category: {product.category}</p>
      <p className="product-detail-description">Rating: {product.rating}</p>
      <hr></hr>
      <div className='color horizontal'>
        <div className='color-options'>
        {product.product_colors.map((color, index) => (
              <div key={index} className="color-option">
                {getColorImage(color.hex_value)}
                <span>{color.colour_name}</span>
          </div>
        ))}
        </div>
      </div>
      <hr></hr>
      <p className="product-detail-description">Description: </p>
      <p className="product-detail-desc">{product.description}</p>
    </div>
    </div>
  );
}

export default ProductDetail;
