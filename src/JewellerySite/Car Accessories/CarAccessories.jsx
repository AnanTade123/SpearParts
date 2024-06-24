import React,{useEffect} from 'react';
import './CarAccessories.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const CarAccessories  = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
    <div className='container'>
      <div className='heading'>
        <h2> Car Accessories</h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/BackupCamera">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/acc2e07.jpg" alt="Rings" />
            <div className="auto-name"> Backup Camera</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CarDecalSticker ">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/cd57fbe.jpg" alt="Earrings" />
            <div className="auto-name"> 
            Car Decal Sticker </div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CarExteriorAccessories">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/133fe77.jpg" alt="Pendants" />
            <div className="auto-name">Car Exterior Accessories</div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/CarInteriorAccessories">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/ff5c219.jpg" alt="Bracelets" />
            <div className="auto-name">Car Interior Accessories</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/EmergencyBreakdown">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/7a96b35.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Emergency Breakdown
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/MobileHolder">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/0596f56.jpg" alt="Mens Collection" />
            <div className="auto-name">Mobile Holder</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/OtherAccessories">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/0a482bd.webp" alt="Mens Collection" />
            <div className="auto-name">Other Accessories
</div>
          </Link>
        </div>
       

      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default CarAccessories;
