import React,{useEffect} from 'react';
import './Maintenance.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Maintenance = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
    <div className='container'>
      <div className='heading'>
        <h2>Maintanance Service Parts</h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/Belt">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/ddbeb81.jpg" alt="Rings" />
            <div className="auto-name"> Belt</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Break">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/437bfd0.jpg" alt="Earrings" />
            <div className="auto-name"> Break
            </div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/EnginOil">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/4614ecf.webp" alt="Pendants" />
            <div className="auto-name"> Engine Oil  </div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/Filter">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/33d30ef.jpg" alt="Bracelets" />
            <div className="auto-name">Filter</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/GlowPlug">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/d6d71f0.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Glow Plug</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Horn">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/d5b3ac7.jpg" alt="Mens Collection" />
            <div className="auto-name">Horn</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Light">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/53380d3.webp" alt="Mens Collection" />
            <div className="auto-name">Light</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/RepairServiceKit">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/5f75a07.jpg" alt="Mens Collection" />
            <div className="auto-name">Repair Service Kit
           </div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ShockAbsorber">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/f26073e.jpg" alt="Mens Collection" />
            <div className="auto-name"
            >Shock Absorber</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/SparkPlug">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/acd0058.jpg" alt="Mens Collection" />
            <div className="auto-name">Spark Plug
            </div>
          </Link>
        </div>
       

      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Maintenance;
