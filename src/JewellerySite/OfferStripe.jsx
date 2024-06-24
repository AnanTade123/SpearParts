import React from 'react';
import './OfferStripe.css';

const OfferStripe = () => {
  return (
    <div className="offer-stripe">
      <marquee behavior="scroll" direction="left">
        <span className="offer-text"> Todays's Special Offer: Get 20% off on all items! Use code: SAVE20 </span>
      </marquee>
    </div>
  );
}

export default OfferStripe;
