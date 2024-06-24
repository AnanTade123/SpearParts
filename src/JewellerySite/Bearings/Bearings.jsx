import React ,{useEffect}from 'react';
import './Bearings.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


const Bearing  = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    
    
    <div>
       
    <div className='container'>
      <div className='heading'>
        <h2>Bearings Parts</h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/RearWheelBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/1c06dba.jpg" alt="Rings" />
            <div className="auto-name"> Rear Wheel Bearing</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/PilotBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/67a74ba.jpg" alt="Earrings" />
            <div className="auto-name"> Pilot Bearing</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ShockAbsorberBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/e56e31f.jpg" alt="Pendants" />
            <div className="auto-name">Shock Absorber Bearing</div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/TransmissionBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/f97ddeb.jpg" alt="Bracelets" />
            <div className="auto-name">Transmission Bearing</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/AlternatorBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/bce414f.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Alternator Bearing
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/BigEndBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/40e95ca.jpg" alt="Mens Collection" />
            <div className="auto-name">Big End Bearing</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ClutchReleaseBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/58e3bef.jpg" alt="Mens Collection" />
            <div className="auto-name">Clutch Release Bearing
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/CrankshaftBearing">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/19bcb3d.jpg" alt="Mens Collection" />
            <div className="auto-name">Crankshaft Bearing</div>
          </Link>
        </div>
        

      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Bearing ;
