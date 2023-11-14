import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Makeup.css';
import Navbar from '../components/Navbar';

function EyebrowsCards() {
    const [eyebrowsData, setEyebrowsData] = useState([]);
  
    useEffect(() => {
      axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow')
        .then(response => {
          setEyebrowsData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);

  return (
    <div>
      <div><Navbar></Navbar></div>
      <h1>Eyebrow Products</h1>
      <hr></hr>
      <div className="card-container">
        {eyebrowsData.map((item, index) => (
          <Link to={`/product/${item.id}`} key={index} className="card-link">
            <div className="card">
              <img
                src={item.image_link}
                alt={item.name}
                className="card-image"
              />
              <div className="card-details">
                <h3>{item.name}</h3>
                <h4>Brand: {item.brand}</h4>
                <h4>Price: ${item.price}</h4>
                <div className="color-images">
                  {item.product_colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="color-image"
                      style={{ backgroundColor: color.hex_value }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EyebrowsCards;
