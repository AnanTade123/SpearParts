import React, { useState } from 'react';
import './CustomerReview.css'; // Import CSS file for styling

const CustomerReview = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className='review-heading'>
        <h2>Customer Reviews</h2>
      </div>
      <div className='customer-review'>
        <div className='review'>
          <img src='https://plus.unsplash.com/premium_photo-1661697102319-6e17dc05893c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bm9ybWFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D' alt='Customer' />
          <div className='review-text'>
            <p>"Great service! The team at SpareDrive Solutions helped me find the right spare parts for my car quickly and efficiently."</p>
            <p><strong>- Sia Doe</strong></p>
          </div>
        </div>
        <div className='review'>
          <img src='https://plus.unsplash.com/premium_photo-1664541336816-2a2987114ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5vcm1hbCUyMGdpcmwlMjBmYWNlfGVufDB8fDB8fHww' alt='Customer' />
          <div className='review-text'>
            <p>"Excellent products and excellent customer service. Highly recommended!"</p>
            <p><strong>- Jinee Smith</strong></p>
          </div>
        </div>
        {showMore && (
          <>
            <div className='review'>
              <img src='https://plus.unsplash.com/premium_photo-1664541336816-2a2987114ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5vcm1hbCUyMGdpcmwlMjBmYWNlfGVufDB8fDB8fHww' alt='Customer' />
              <div className='review-text'>
                <p>"Very satisfied with the purchase. Will definitely come back for more parts."</p>
                <p><strong>- Alex Johnson</strong></p>
              </div>
            </div>
            <div className='review'>
              <img src='https://plus.unsplash.com/premium_photo-1664541336816-2a2987114ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5vcm1hbCUyMGdpcmwlMjBmYWNlfGVufDB8fDB8fHww' alt='Customer' />
              <div className='review-text'>
                <p>"Quick delivery and the parts were exactly as described. Great experience!"</p>
                <p><strong>- Maria Lopez</strong></p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className='show-more-button'>
        <button onClick={handleShowMore}>
          {showMore ? 'Show Less Reviews' : 'See More Reviews'}
        </button>
      </div>
    </div>
  );
}

export default CustomerReview;
