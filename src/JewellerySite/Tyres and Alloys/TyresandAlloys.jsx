import React ,{useEffect}from 'react';
import './TyresandAlloys.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const TyresandAlloys = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
    <div className="container">
      <div className="heading">
        <h2>Tyres and Alloys</h2>
      </div>

      <div className="row">
        <div className="image-container">
          <Link to="/Alloywheel">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/43da440.webp" alt="Alloy Wheel" />
            <div className="auto-name">Alloy Wheel</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/PassengerCarTyre">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/9efb038.jpg" alt="Passenger Car Tyre" />
            <div className="auto-name">Passenger Car Tyre</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/TyreTube">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/6a463af.jpg" alt="Tyre Tube" />
            <div className="auto-name">Tyre Tube</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Tyrevalve">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/1c6d2a6.jpg" alt="Tyre Valve" />
            <div className="auto-name">Tyre Valve</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/WheelCover">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/08fd80a.jpg" alt="Wheel Cover" />
            <div className="auto-name">Wheel Cover</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/WheelRim">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/35e4f16.webp" alt="Wheel Rim" />
            <div className="auto-name">Wheel Rim</div>
          </Link>
        </div>
      </div>
    
    </div>
    <Footer />
    </div>
  );
}

export default TyresandAlloys;
