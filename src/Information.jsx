import React from 'react';
import './css/Information.css'; 
import Navbar from './components/Navbar';

const Information = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://maps.app.goo.gl/53MLHdGh5QGmXuSd7';
      };
  return (
    <div>
    <div><Navbar></Navbar></div>
    <div className="page-container1">
      <div className="text-container1">
      <div className='c'>
        <c>Chèri.</c>
        </div>
        <div className='container-x'>
        <p className='x'>19 Pl. </p>
        <p className='x'>Saint-Jacques, </p>
        <p className='x'>57000 Metz,  </p>
        <p className='x'>France </p>
        </div>
        <button className="web-button" onClick={handleButtonClick}>
            GET DIRECTIONS
          </button>
        <div className='container-n'>
        <p className='x'>Operational hours : 09.00 - 20.00 </p>
        <p className='x'>Call : (425) - 555 1212 </p>
        </div>
      </div>
      <div className="image-container1">
        <img
          src="https://images.unsplash.com/photo-1565966800825-b2ba3b262570?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Deskripsi Gambar"
          className="full-width-image"
        />
      </div>
    </div>
    </div>

  );
};

export default Information;
