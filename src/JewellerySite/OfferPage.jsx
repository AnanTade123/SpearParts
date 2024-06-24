import React from 'react';
import './OfferPage.css';

const OfferPage = () => {
  return (
    <div>
    <div className='heading'>
        <h2>Todays Offer</h2>
      </div>
    <div className='image-containers'>
        
      <div className='image-wrapper'>
        <img src="https://hiteshautoparts.in/wp-content/uploads/2020/10/banner01.png" alt="Sample 1" />
        <div className="overlay"> Today's Offer! 
        <span > Flat 10% On All Spare Parts</span></div>
      </div>
      
      <div className='image-wrapper'>
        <img src="https://hiteshautoparts.in/wp-content/uploads/2021/04/Banner-auto-parts-OIL.png" alt="Sample 2" />
        <div className="overlay">Flate 20% offer On All Branded Oil</div>
      </div>
    </div>
    </div>
  );
}

export default OfferPage;
