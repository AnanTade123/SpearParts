import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useEffect } from 'react';

const Body = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
    <div className='container'>
      <div className='heading'>
        <h2>Body Parts</h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/BeamAxle">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/d68d31d.jpg" alt="Rings" />
            <div className="auto-name"> Beam Axle</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BodyAccessories">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/ab143a7.webp" alt="Earrings" />
            <div className="auto-name"> Body Accessories</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BodyFrame">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/ff2dd35.jpg" alt="Pendants" />
            <div className="auto-name">Body Frame</div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/BodyRubberStop">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/b04e4e7.jpg" alt="Bracelets" />
            <div className="auto-name">Body Rubber Stop</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Bonnet">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/6899905.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Bonnet
</div>
          </Link>
        </div>
     
        <div className="image-container">
          <Link to="/Boot">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/3a5bc8a.jpg" alt="Mens Collection" />
            <div className="auto-name">Boot
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Bumper">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/40e6a4c.jpg" alt="Mens Collection" />
            <div className="auto-name">Bumper</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BumperBracket">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/e823ebb.jpg" alt="Mens Collection" />
            <div className="auto-name">Bumper Bracket
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BumperTrim">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/beccd06.jpg" alt="Mens Collection" />
            <div className="auto-name">Bumper Trim</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Canopy">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/5529527.jpg" alt="Mens Collection" />
            <div className="auto-name">Canopy
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CentralLockingSystem">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/a9e0c30.jpg" alt="Mens Collection" />
            <div className="auto-name">Central Locking System</div>
          </Link>
        </div>

      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Body;
