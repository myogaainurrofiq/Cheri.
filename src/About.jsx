import React from 'react';
import './css/AboutUs.css'; 
import Navbar from './components/Navbar';

const About = () => {
  return (
    <div>
        <div><Navbar></Navbar></div>
        <h1>About Us</h1>
    <div className="about-us-container">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1542833807-ad5af0977050?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="About Us"
          className="about-us-image"
        />
      </div>
      <div className="text-container">
        <div className='y'>
        <y>Welcome to Chèri.</y>
        </div>
        <div className='t'>
        <t>
        Chèri is a makeup brand with a vision to provide long-lasting beauty and confidence to our customers. We prioritize quality with products designed with love and manufactured using the finest ingredients. Continuously innovating and staying at the forefront of the latest makeup trends, we have a dedicated team of experts committed to creating stunning makeup products. With Chèri, you not only enhance your beauty but also care for your skin. Thank you for choosing Chèri to celebrate your beauty.
        </t>
        </div>
        {/* Add more text or other content as needed */}
      </div>
    </div>
    </div>
  );
};

export default About;
