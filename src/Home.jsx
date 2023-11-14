import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'; 
import Navbar from './components/Navbar';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  return (
    <div className='body2'>
      <div><Navbar></Navbar></div>
      <section className="carousel-container">
        <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          <div className="carousel-slide">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide" />
            <div className="carousel-caption">
              <h3>Golden Hour Glow</h3>
              <p>Capture the essence of the golden hour with a radiant and luminous makeup style.</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="https://images.unsplash.com/photo-1560130055-e3306e04884b?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Second slide" />
            <div className="carousel-caption">
              <h3>Radiate Confidence</h3>
              <p>Blush adds a pop of color to your makeup routine.</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="https://images.unsplash.com/photo-1531907779240-9a7c7ad096df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Third slide" />
            <div className="carousel-caption">
              <h3>Glamour Goddess</h3>
              <p>Unleash your inner diva with this stunning makeup look.</p>
            </div>
          </div>
        </div>
        <button onClick={handlePrevSlide}>&lt;</button>
        <button onClick={handleNextSlide}>&gt;</button>
      </section>

      <section>
      <h1>Beauty Products</h1>
        <div className="card1container">
        <div className="card1 horizontal">
          <Link to="/BlushCards">
            <img
              src="https://makeup-api.herokuapp.com/assets/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg"
              alt="Blush"
            />
            <div>Blush</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/BronzerCards">
            <img
              src="https://makeup-api.herokuapp.com/assets/nail_polish-a7e7204834c0c30e8b57a1ba9896656331e228b0daa09d1705d1ab29bc0b7151.svg"
              alt="Bronzer"
            />
            <div>Bronzer</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/EyebrowsCards">
            <img
              src="https://makeup-api.herokuapp.com/assets/eyebrow-fc49d8d480ace717203a21fe863c2231970063add91ed2f15181fe8e2d3b96b9.svg"
              alt="Eyebrows"
            />
            <div>Eyebrow</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/EyelinerCards">
            <img
              src="https://makeup-api.herokuapp.com/assets/eyeliner-de329b6d65d721a45190051af1153e23202df9eb1c393d1ac65972376ee42d50.svg"
              alt="Eyeliner"
            />
            <div>Eyeliner</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/FoundationCards">
            <img
              src="https://makeup-api.herokuapp.com/assets/foundation-9985c8a404d4a19cf7a2985ed504958cadd9f71252a73c90b6a7178bf7075143.svg"
              alt="Foundation"
            />
            <div>Foundation</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/MascaraCards">
            <img
              src="https://makeup-api.herokuapp.com/assets/mascara-0deeeb81e58f31ddbff07847bfd0820e5ecdba1419f4281da743a05e0d6b3e69.svg"
              alt="Mascara"
            />
            <div>Mascara</div>
          </Link>
        </div>
        </div>
        <h2>Made with ❤️ by Kelompok 19</h2>
      </section>
    </div>
  );
}

export default Home;
