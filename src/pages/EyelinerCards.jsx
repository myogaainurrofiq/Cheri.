import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Makeup.css';
import Navbar from '../components/Navbar';

function EyelinerCards() {
    const [eyelinerData, setEyelinerData] = useState([]);
  
    useEffect(() => {
      axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner')
        .then(response => {
          setEyelinerData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);

  return (
    <div>
      <div><Navbar></Navbar></div>
      <h1>Eyeliner Products</h1>
      <hr></hr>
      <div className="card-container">
        {eyelinerData.map((item, index) => (
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

export default EyelinerCards;
