import React, { useEffect } from 'react';
import './Engine.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Engine = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
    <div className='container'>
      <div className='heading'>
        <h2>Engine Parts</h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/Airsupply">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/8fea232.jpg" alt="Rings" />
            <div className="auto-name"> Air Supply</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BeltandChainDrive">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/cfa6334.jpg" alt="Earrings" />
            <div className="auto-name"> Belt and Chain Drive Parts</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BigEndBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/40e95ca.jpg" alt="Pendants" />
            <div className="auto-name"> Big End Bearing</div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/CamshaftBush">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/3759fa0.jpg" alt="Bracelets" />
            <div className="auto-name">Camshaft Bush</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CamshaftGear">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/a3c7c58.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Camshaft Gear</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Carburettor">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/7103bee.jpg" alt="Mens Collection" />
            <div className="auto-name">Carburettor</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CarburettorFlange">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/0442561.jpg" alt="Mens Collection" />
            <div className="auto-name">Carburettor Flange</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Connectingrod">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/cb86c3c.jpg" alt="Mens Collection" />
            <div className="auto-name">Connecting rod</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ControlUnit">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/2676bd2.jpg" alt="Mens Collection" />
            <div className="auto-name">Control Unit Glow Plug System</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CoolerEGR">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/d1e33d6.jpg" alt="Mens Collection" />
            <div className="auto-name">Cooler EGR</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CylinderBlock">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/bbde1df.jpg" alt="Mens Collection" />
            <div className="auto-name">Cylinder Block
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CrankshaftSeal">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/abc8452.jpg" alt="Mens Collection" />
            <div className="auto-name">Crankshaft Seal
</div>
          </Link>
        </div>

      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Engine;
