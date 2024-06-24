import React,{useEffect} from 'react';
import './ElectricCom.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import OfferStripe from '../OfferStripe';

const ElectricCom = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    
    <div>
        
    <div className='container'>
      <div className='heading'>
        <OfferStripe/>
        <h2>Electric Components </h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/Alternator">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/fc36a32.webp" alt="Rings" />
            <div className="auto-name"> Alternator</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/AntennaCable">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/7bed729.jpg" alt="Earrings" />
            <div className="auto-name"> Antenna Cable
            </div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/AudioSystem ">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/f783c05.webp" alt="Pendants" />
            <div className="auto-name"> Audio System </div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/Battery">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/0353536.jpg" alt="Bracelets" />
            <div className="auto-name">Battery</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BatteryCable">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/938c814.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Battery Cable
            </div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BatteryTerminal">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/c53458b.jpg" alt="Mens Collection" />
            <div className="auto-name">Battery Terminal</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BatteryHolder">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/84951b1.jpg" alt="Mens Collection" />
            <div className="auto-name">Battery Holder</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BatteryCover">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/13c8c53.jpg" alt="Mens Collection" />
            <div className="auto-name">Battery Cover
           </div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BonnetReleaseCable">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/b478d6a.jpg" alt="Mens Collection" />
            <div className="auto-name"
            >Bonnet Release Cable</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CentralLockingSystem">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/44d334d.jpg" alt="Mens Collection" />
            <div className="auto-name">Central Locking System
            </div>
          </Link>
        </div>
       
        <div className="image-container">
          <Link to="/ControlUnit">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/35cec10.jpg" alt="Mens Collection" />
            <div className="auto-name">Control Unit

            </div>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/ElectricDrive">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/090a41d.jpg" alt="Mens Collection" />
            <div className="auto-name">Electric Drive

            </div>
          </Link>
        </div>
      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default ElectricCom;
