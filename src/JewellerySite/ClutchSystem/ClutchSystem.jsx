import React, {useEffect} from 'react';
import './ClutchSystem.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const ClutchSystem  = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
    <div className='container'>
      <div className='heading'>
        <h2>Clutch System Parts</h2>
      </div>
      
      <div className='row'>
        <div className="image-container">
          <Link to="/ClutchCable">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/502c1f3.jpg" alt="Rings" />
            <div className="auto-name"> Clutch Cable</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ClutchControlSwitch">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/b9cb465.jpg" alt="Earrings" />
            <div className="auto-name"> 
            Clutch Control Switch </div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ClutchDisc">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/ac626db.jpg" alt="Pendants" />
            <div className="auto-name">Clutch Disc</div>
          </Link>
        </div>
        <div className="image-container"> 
          <Link to="/ClutchHose">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/84792a6.jpg" alt="Bracelets" />
            <div className="auto-name">Clutch Hose</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ClutchKit">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/4f437d1.jpg" alt="Tennis Bracelets" />
            <div className="auto-name">Clutch Kit
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ClutchMaster">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/57be749.jpg" alt="Mens Collection" />
            <div className="auto-name">Clutch Master Cylinder</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ClutchMasterReservoir">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/54adae4.jpg" alt="Mens Collection" />
            <div className="auto-name">Clutch Master Cylinder Reservoir
</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/ClutchPedal">
            <img src="https://boodmo.com/media/cache/catalog_image/images/categories/a20873c.jpg" alt="Mens Collection" />
            <div className="auto-name">Clutch Pedal</div>
          </Link>
        </div>
        

      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default ClutchSystem ;
