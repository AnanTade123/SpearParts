import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './JewellerySite/Navbar';
import Home from './JewellerySite/Home';
import Collection from './JewellerySite/Collection';
import True from './JewellerySite/True';
import CertificateSlider from './JewellerySite/CertificateSlider'; 
import CartPage from './JewellerySite/CartPage';
import BraceletProducts from './JewellerySite/BraceletProducts';
import EarringProducts from './JewellerySite/EarringProducts';
import MensCollectionProducts from './JewellerySite/MensCollectionProducts';
import RingProducts from './JewellerySite/RingProducts';
import TennisBraceletProducts from './JewellerySite/TennisBraceletProducts';
import PendantProducts from './JewellerySite/PendantProducts';
import Certificate from './JewellerySite/Certificate';
import SignIn from './JewellerySite/SignIn';
import Registration from './JewellerySite/Registration'
import Wishlist from './JewellerySite/Wishlist/Wishlist';
import About from './JewellerySite/Info/About';
import Return from './JewellerySite/Info/Return';
import ShippingPolicy from './JewellerySite/Info/ShippingPolicy'
import BuybackPolicy from './JewellerySite/Info/BuybackPolicy'
import PrivacyPolicy from './JewellerySite/Info/PrivacyPolicy'
import TermsConditons from './JewellerySite/Info/TermsCondition'
import OfferPage from './JewellerySite/OfferPage';
import Engine from './JewellerySite/engine/Engine';
import Body from './JewellerySite/Body/Body';
import Bearing from './JewellerySite/Bearings/Bearings';
import ClutchSystem from './JewellerySite/ClutchSystem/ClutchSystem';
import CarAccessories from './JewellerySite/Car Accessories/CarAccessories';
import OfferStripe from './JewellerySite/OfferStripe';
import Maintenance from './JewellerySite/Maintenance Service Parts/Maintenance';
import ElectricCom from './JewellerySite/Electric Components/ElectricCom'
import TyresandAlloys from './JewellerySite/Tyres and Alloys/TyresandAlloys'
import Alloywheel from './JewellerySite/Tyres and Alloys/Alloywheel'
import AlloywheelProduct from './JewellerySite/Tyres and Alloys/AlloywheelProduct';
import PassengerCarTyreProduct from './JewellerySite/Tyres and Alloys/PassengerCarTyre';
import TyreTubeProduct from './JewellerySite/Tyres and Alloys/TyreTubeProduct';
import TyrevalveProduct from './JewellerySite/Tyres and Alloys/TyrevalveProduct';
import WheelCoverProduct from './JewellerySite/Tyres and Alloys/WheelCoverProduct';
import WheelRimProduct from './JewellerySite/Tyres and Alloys/WheelRimProduct';
import AirsupplyProduct from './JewellerySite/engine/AirsupplyProduct';
import BeltandChainDriveProduct from './JewellerySite/engine/BeltandChainDriveProduct';
import BigEndBearingProduct from './JewellerySite/engine/BigEndBearingProduct';
import CamshaftBushProduct from './JewellerySite/engine/CamshaftBushProduct';
import CamshaftGearProduct from './JewellerySite/engine/CamshaftGearProduct';
import CarburettorProduct from './JewellerySite/engine/CarburettorProduct';
import CarburettorFlangeProduct from './JewellerySite/engine/CarburettorFlangeProduct';
import ConnectingrodProduct from './JewellerySite/engine/ConnectingrodProduct';
import ControlUnitProduct from './JewellerySite/engine/ControlUnitProduct';
import CoolerEGRProduct from './JewellerySite/engine/CoolerEGRProduct';
import CylinderBlockProduct from './JewellerySite/engine/CylinderBlockProduct';
import CrankshaftSealProduct from './JewellerySite/engine/CrankshaftSealProduct';
import BeamAxleProduct from './JewellerySite/Body/BeamAxleProduct';
import BodyAccessoriesProduct from './JewellerySite/Body/BodyAccessoriesProduct';
import BodyFrameProduct from './JewellerySite/Body/BodyFrameProduct';
import BodyRubberStopProduct from './JewellerySite/Body/BodyRubberStopProduct';
import BonnetProduct from './JewellerySite/Body/BonnetProduct';
import BumperProduct from './JewellerySite/Body/BumperProduct';
import BumperBracketProduct from './JewellerySite/Body/BumperBracketProduct';
import BumperTrimProduct from './JewellerySite/Body/BumperTrimProduct';
import CanopyProduct from './JewellerySite/Body/CanopyProduct';
import CentralLockingSystemProduct from './JewellerySite/Body/CentralLockingSystemProduct';
import BackupCameraProduct from './JewellerySite/Car Accessories/BackupCameraProduct';
import CarDecalStickerProduct from './JewellerySite/Car Accessories/CarDecalStickerProduct';
import CarExteriorAccessoriesProduct from './JewellerySite/Car Accessories/CarExteriorAccessoriesProduct';
import CarInteriorAccessoriesProduct from './JewellerySite/Car Accessories/CarInteriorAccessoriesProduct';
import EmergencyBreakdownProduct from './JewellerySite/Car Accessories/EmergencyBreakdownProduct';
import OtherAccessoriesProduct from './JewellerySite/Car Accessories/OtherAccessoriesProduct';
import MobileHolderProduct from './JewellerySite/Car Accessories/MobileHolderProduct';
import BeltProduct from './JewellerySite/Maintenance Service Parts/BeltProduct';
import BreakProduct from './JewellerySite/Maintenance Service Parts/BreakProduct';
import EnginOilProduct from './JewellerySite/Maintenance Service Parts/EnginOilProduct';
import FilterProduct from './JewellerySite/Maintenance Service Parts/FilterProduct';
import GlowPlugProduct from './JewellerySite/Maintenance Service Parts/GlowPlugProduct';
import HornProduct from './JewellerySite/Maintenance Service Parts/HornProduct';
import LightProduct from './JewellerySite/Maintenance Service Parts/LightProduct'
import RepairServiceKitProduct from './JewellerySite/Maintenance Service Parts/RepairServiceKitProduct'
import ShockAbsorberProduct from './JewellerySite/Maintenance Service Parts/ShockAbsorberProduct'
import SparkPlugProduct from './JewellerySite/Maintenance Service Parts/SparkPlugProduct'
import AlternatorProduct from './JewellerySite/Electric Components/AlternatorProduct';
import AntennaCableProduct from './JewellerySite/Electric Components/AntennaCableProduct';
import AudioSystemProduct from './JewellerySite/Electric Components/AudioSystemProduct';
import BatteryProduct from './JewellerySite/Electric Components/BatteryProduct';
import BatteryCableProduct from './JewellerySite/Electric Components/BatteryCableProduct';
import BatteryCoverProduct from './JewellerySite/Electric Components/BatteryCoverProduct';
import BatteryHolderProduct from './JewellerySite/Electric Components/BatteryHolderProduct';
import BatteryTerminalProduct from './JewellerySite/Electric Components/BatteryTerminalProduct';
import BonnetReleaseCableProduct from './JewellerySite/Electric Components/BonnetReleaseCableProduct';
import ElectricDriveProduct from './JewellerySite/Electric Components/ElectricDriveProduct';

//import BigEndBearingProduct from './JewellerySite/engine/BigEndBearingProduct';
import AlternatorBearingProduct from './JewellerySite/Bearings/AlternatorBearingProduct'
import ClutchReleaseBearingProduct from './JewellerySite/Bearings/ClutchReleaseBearingProduct'
 import CrankshaftBearingProduct from './JewellerySite/Bearings/CrankshaftBearingProduct'
 import PilotBearingProduct from './JewellerySite/Bearings/PilotBearingProduct'
 import RearWheelBearingProduct from './JewellerySite/Bearings/RearWheelBearingProduct'
 import ShockAbsorberBearingProduct from './JewellerySite/Bearings/ShockAbsorberBearingProduct'
 import TransmissionBearingProduct from './JewellerySite/Bearings/TransmissionBearingProduct'
 import ClutchCableProduct from './JewellerySite/ClutchSystem/ClutchCableProduct';
 import ClutchControlSwitchProduct from './JewellerySite/ClutchSystem/ClutchControlSwitchProduct';
 import ClutchDiscProduct from './JewellerySite/ClutchSystem/ClutchDiscProduct';
 import  ClutchHoseProduct from './JewellerySite/ClutchSystem/ClutchHoseProduct';
 import  ClutchKitProduct from './JewellerySite/ClutchSystem/ClutchKitProduct';
 import  ClutchMasterProduct from './JewellerySite/ClutchSystem/ClutchMasterProduct';
 import  ClutchMasterReservoirProduct from './JewellerySite/ClutchSystem/ClutchMasterReservoirProduct';
 import  ClutchPedalProduct from './JewellerySite/ClutchSystem/ClutchPedalProduct';






 

const App = () => {
   const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartCount, setCartCount] = useState(0);
  


  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    const savedCartCount = localStorage.getItem('cartCount');
    if (savedCartCount !== null) {
      setCartCount(parseInt(savedCartCount));
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    const newCartCount = cartCount + 1;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1; // Assuming each product object has a 'quantity' property
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, {...product, quantity: 1}]); // Assuming each product object has a 'quantity' property
  
      // Update the cart count only if a new product is added
      const newCartCount = cartCount + 1;
      setCartCount(newCartCount);
      localStorage.setItem('cartCount', newCartCount);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
    const productToRemove = cart.find((item) => item.id === productId);
    if (!productToRemove) return;
  
  
   
    const newCartCount = cartCount - productToRemove.quantity;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  };
 

  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem('wishlistItems')) || []
  );

  
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updatedWishlist);
  };


  const productsPage1 = [
    {
      id: 1,
      name: "Clutch Cable",
      description: "Clutch Cable",
      price: 699.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/502c1f3.jpg"
    },
    {
      id: 2,
      name: "Clutch Control Switch",
      description: "Clutch Control Switch",
      price: 399.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b9cb465.jpg"
    },
    {
      id: 3,
      name: "Clutch Disc",
      description: "Clutch Disctouch.",
      price: 1149.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ac626db.jpg"
    },
    {
      id: 4,
      name: "Clutch Hose",
      description: "Clutch Hose.",
      price: 249.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/84792a6.jpg"
    },
    {
      id: 5,
      name: "Clutch Kit",
      description: "Clutch Kit",
      price: 1779.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4f437d1.jpg"
    },
    {
      id: 6,
      name: "Clutch Master Cylinder",
      description: "Clutch Master Cylinder.",
      price: 1789.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/57be749.jpg"
    },
    {
      id: 7,
      name: "Clutch Pedal",
      description: "Clutch Pedal",
      price: 1299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a20873c.jpg"
    },
    {
      id: 8,
      name: "Clutch Pressure Plate",
      description: "Clutch Pressure Plate",
      price: 1799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e698864.jpg"
    },
    {
      id: 9,
      name: "Clutch Release Fork",
      description: "Clutch Release Fork",
      price: 1419.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9bf75c6.jpg"
    },
    {
      id: 10,
      name: "Clutch Release Lever",
      description: "Clutch Release Lever",
      price: 399.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/fc67e26.jpg"
    },
    {
      id: 11,
      name: "Clutch Slave Cylinde",
      description: "Clutch Slave Cylinde",
      price: 469.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/07421e2.jpg"
    },
    {
      id: 12,
      name: "Clutch Repair Kit",
      description: "Trendy bracelet featuring the infinity symbol.",
      price: 559.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/8a3d983.jpg"
    },
   
  ];

  const productsPage2 = [
    {
      id: 21,
      name: "Air Filter",
      description: "Air Filter.",
      price: 199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a16bbf6.jpg"
    },
    {
      id: 22,
      name: "Automatic Transmission Filter",
      description: "Automatic Transmission Filter",
      price: 1299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/21ce121.jpg"
    },
    {
      id: 23,
      name: "Cabin Filter",
      description: "Cabin Filter",
      price: 399.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5724225.jpg"
    },
    {
      id: 24,
      name: "Filter",
      description: "Gorgeous cluster earrings adorned with vibrant emeralds.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/32a61d7.webp"
    },
    {
      id: 25,
      name: "Filter Set",
      description: "Filter Set",
      price: 1199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9e9e332.jpg"
    },
    {
      id: 26,
      name: "Fuel Filter",
      description: "Fuel Filter",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/82fc142.jpg"
    },
    {
      id: 27,
      name: "Fuel Pump Filter",
      description: "Fuel Pump Filter.",
      price: 579.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e4ecb77.jpg"
    },
    {
      id: 28,
      name: "Oil Filter",
      description: "Oil Filter",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e59eb08.jpg"
    },
    {
      id: 29,
      name: "Gold Hoop Earrings",
      description: "Simple and versatile gold hoop earrings.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/ee/ee/9b/eeee9b65a0b20cd17a6379b0a7cb1caf.jpg"
    },
    {
      id: 30,
      name: "Ruby Stud Earrings",
      description: "Bold ruby stud earrings for a pop of color.",
      price: 1399.99,
      imageUrl: "https://i.pinimg.com/564x/cf/1e/87/cf1e876ad931ff7a099e6a006417f16a.jpg"
    },
    {
      id: 31,
      name: "Sterling Silver Huggie Earrings",
      description: "Charming huggie earrings crafted in sterling silver.",
      price: 59.99,
      imageUrl: "https://i.pinimg.com/564x/c3/f0/d8/c3f0d8b3195b732c46c8a3823832704b.jpg"
    },
    {
      id: 32,
      name: "Crystal Chandelier Earrings",
      description: "Statement chandelier earrings adorned with sparkling crystals.",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/0c/a8/9e/0ca89e649a39fa509e2d2a1cfa596af7.jpg"
    }
  ];

  const productsPage3 = [
    {
      id: 57,
      name: "Belt Parts",
      description: "Belt Parts",
      price: 999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ddbeb81.jpg"
    },
    {
      id: 58,
      name: "Brake Repair Kit",
      description: "Brake Repair Kit",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/8945d07.jpg"
    },
   
    {
      id: 60,
      name: "Brake Fluid",
      description: "Brake Fluid",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/3de286d.jpg"
    },
    {
      id: 61,
      name: "Fog Lamp",
      description: "Fog Lamp",
      price: 199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/2f94c53.jpg"
    },
    {
      id: 62,
      name: "Glow Plug",
      description: "Glow Plug.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d6d71f0.jpg"
    },
    {
      id: 63,
      name: "Spark Plug",
      description: "Spark Plug",
      price: 79.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/acd0058.jpg"
    },
    {
      id: 59,
      name: "Wiper Blade and Sets",
      description: "Trendy Wiper Blade and Sets",
      price: 149.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/1053d82.jpg"
    },
    {
      id: 64,
      name: "Horn",
      description: "Horn",
      price: 69.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d5b3ac7.jpg"
    },
    {
      id: 65,
      name: "Shock Absorber and Strut",
      description: "Shock Absorber and Strut",
      price: 299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7ffcac5.jpg"
    },
    {
      id: 66,
      name: "Engine Oil ",
      description: "Engine Oil ",
      price: 1729.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4614ecf.webp"
    },
    {
      id: 67,
      name: "Clutch",
      description: "Clutch",
      price: 199.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e8cb288.jpg"
    },
    {
      id: 68,
      name: "Repair Service Kit",
      description: "Repair Service Kit",
      price: 89.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5f75a07.jpg"
    }
  
  ];

  const productsPage4 = [
 
    {
      id: 45,
      name: "Big End Bearing",
      description: "Big End Bearing.",
      price: 1499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/40e95ca.jpg"
    },
    {
      id: 46,
      name: "Camshaft Bush",
      description: "Camshaft Bush",
      price: 1299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/3759fa0.jpg"
    },
    {
      id: 47,
      name: "Camshaft Seal",
      description: "Camshaft Seal",
      price: 999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d2a2960.jpg"
    },
    {
      id: 48,
      name: "Carburettor",
      description: "Carburettor.",
      price: 2299.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7103bee.jpg"
    },
    {
      id: 49,
      name: "Carburettor Flanget",
      description: "Carburettor Flange",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0442561.jpg"
    },
    {
      id: 50,
      name: "Control Unit Glow Plug",
      description: "Control Unit Glow Plug",
      price: 1899.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/2676bd2.jpg"
    },
    {
      id: 51,
      name: "Crankcase Gasket",
      description: "Crankcase Gasket",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d19747a.jpg"
    },
    {
      id: 52,
      name: "Crankshaft Gear",
      description: "Crankshaft Gear",
      price: 2599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/abc8452.jpg"
    },
    {
      id: 53,
      name: "Cylinder Head",
      description: "Cylinder Head.",
      price: 999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7a30f2b.jpg"
    },
    {
      id: 54,
      name: "EGR Valve",
      description: "EGR Valve",
      price: 1999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/80f936e.jpg"
    },
    {
      id: 55,
      name: "Injector",
      description: "Injector",
      price: 899.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7f152d0.jpg"
    },
    {
      id: 56,
      name: "Oil Pressure Switcht",
      description: "Oil Pressure Switch",
      price: 1799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/68b39b5.jpg"
    }

  ];
   
  const productsPage5 = [
    {
      id: 33,
      name: "Rear Wheel Bearing",
      description: "The importance of rear wheel bearings can not be ignored as it is the first connection in moving and static areas of a car. It basically serves as a friction reduction device which increases the rotation efficiency. The rolling generates less friction than sliding. The rear wheel bearing kit does that with the help of metal balls that rolls in between two metal rings. Furthermore, the grease allows the smooth motion while letting the wheel hub rotate as freely as possible.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/1c06dba.jpg"
    },
    {
      id: 34,
      name: "Pilot Bearing",
      description: "Pilot Bearing",
      price: 670.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/67a74ba.jpg"
    },
    {
      id: 35,
      name: "Shock Absorber Bearing",
      description: "Shock Absorber Bearing.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e56e31f.jpg"
    },
    {
      id: 36,
      name: "Transmission Bearing",
      description: "Transmission Bearing",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/f97ddeb.jpg"
    },
    {
      id: 37,
      name: "Alternator Bearing",
      description: "Alternator Bearing.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/bce414f.jpg"
    },
    {
      id: 38,
      name: "Big End Bearing",
      description: "Big End Bearing.",
      price: 899.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/40e95ca.jpg"
    },
    {
      id: 39,
      name: "Clutch Release Bearing",
      description: "Clutch Release Bearing",
      price: 549.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/58e3bef.jpg"
    },
    {
      id: 40,
      name: "Crankshaft Bearing",
      description: "Crankshaft Bearing",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/6a/26/c7/6a26c74d2da1d60c914fc4f84cbb4c23.jpg"
    }
  
  ];

  const productsPage6 = [
    {
      id: 69,
      name: "AC compressor",
      description: "AC compressor",
      price: 8999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/66617d2.jpg"
    },
    {
      id: 70,
      name: "AC Compressor Clutch",
      description: "AC Compressor Clutch",
      price: 1499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/13b308d.jpg"
    },
    {
      id: 71,
      name: "AC Compressor Oil",
      description: "AC Compressor Oil",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b0c7133.jpg"
    },
    {
      id: 72,
      name: "AC Compressor Valve",
      description: "AC Compressor Valve",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c9b37c4.jpg"
    },
    {
      id: 73,
      name: "AC Control Unit",
      description: "AC Control Unit",
      price: 799.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/63dbad4.jpg"
    },
    {
      id: 74,
      name: "AC Pressure Switch",
      description: "AC Pressure Switch.",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a6a0e7a.jpg"
    },
    {
      id: 75,
      name: "AC Repair Kit",
      description: "AC Repair Kit",
      price: 549.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c425f85.jpg"
    },
    {
      id: 76,
      name: "Air Duct",
      description: "Air Duct.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/6f792c1.jpg"
    },
    {
      id: 77,
      name: "Air Vent",
      description: "Air Vent",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/699e30c.jpg"
    },
    {
      id: 78,
      name: "Cabin Temperature Sensor",
      description: "Cabin Temperature Sensors.",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0bbbcd9.jpg"
    },
    {
      id: 79,
      name: "Blower Motor Resistor ",
      description: "Blower Motor Resistor",
      price: 579.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0588546.jpg"
    },
    {
      id: 80,
      name: "Condenser Fan",
      description: "Condenser Fan",
      price: 699.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9b70bd1.jpg"
  }

  ]; 
  const alloywheel = [
    {
      id: 81,
      name: "13 Inch Alloy Wheel",
      description: "13 Inch Alloy Wheel",
      price: 8999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/51dcb74.webp"
    },
    {
      id: 82,
      name: "14 Inch Alloy Wheel",
      description: "14 Inch Alloy Wheel",
      price: 1499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a713fd5.webp"
    },
    {
      id: 83,
      name: "15 Inch Alloy Wheel",
      description: "15 Inch Alloy Wheel",
      price: 499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9df9169.webp"
    },
    {
      id: 84,
      name: "16 Inch Alloy Wheel",
      description: "16 Inch Alloy Wheel",
      price: 599.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/af86a3e.webp"
    }
  ]; 

  
  const passengercartyre = [
    {
      id: 85,
      name: "13 Inch Alloy Wheel",
      description: "13 Inch Alloy Wheel",
      price: 8999.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/51dcb74.webp"
    },
    {
      id: 86,
      name: "14 Inch Alloy Wheel",
      description: "14 Inch Alloy Wheel",
      price: 1499.99,
      imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a713fd5.webp"
    },];

    const tyretubeproduct = [
      {
        id: 85,
        name: "Packed Tube of Size 195/55R16 for Car Tyre",
        description: "Packed Tube of Size 195/55R16 for Car Tyre",
        price: 8999.99,
        imageUrl: "https://m.media-amazon.com/images/I/41pDh+oq4ZL._AC_UY218_.jpg"
      },
      {
        id: 86,
        name: " Packed Tube of Size 175/185/65/60R15 for Car Tyre",
        description: " Packed Tube of Size 175/185/65/60R15 for Car Tyre",
        price: 1499.99,
        imageUrl: "https://m.media-amazon.com/images/I/41pDh+oq4ZL._AC_UY218_.jpg"
      },
      {
        id: 86,
        name: "JK Tyre 195/55 R16 UX Royale Tubeless Car Tyre",
        description: "JK Tyre 195/55 R16 UX Royale Tubeless Car Tyre",
        price: 1499.99,
        imageUrl: "https://m.media-amazon.com/images/I/81SWL5jTjZL._AC_UY218_.jpg"
      },
      {
        id: 86,
        name: "Goodyear 155/80 R13 Kelly VFM3 79T Tubeless Car Tyre",
        description: "Goodyear 155/80 R13 Kelly VFM3 79T Tubeless Car Tyre",
        price: 2499.99,
        imageUrl: "https://m.media-amazon.com/images/I/31cYMhNfSfL._AC_UY218_.jpg"
      },];

      const tyrevalveproduct = [
        {
          id: 1,
          name: "Car Tyre Valve Remover Tool",
          description: "Car Tyre Valve Remover Tool, 4-Way Tire Stem Core Puller for Bike,",
          price: 8999.99,
          imageUrl: "https://m.media-amazon.com/images/I/61xoQacw+4L._AC_UY218_.jpg"
        },
        {
          id: 2,
          name: " Air Valve Caps Tyre Cover Car ",
          description: " Air Valve Caps Tyre Cover Car ",
          price: 1499.99,
          imageUrl: "https://m.media-amazon.com/images/I/51SQ80qAB+L._AC_UY218_.jpg"
        },
        {
          id: 3,
          name: "  Nickel Plated Tire Tyre Valve Stem Core Part (5Pcs) ",
          description: " Nickel Plated Tire Tyre Valve Stem Core Part (5Pcs) ",
          price: 1499.99,
          imageUrl: "https://m.media-amazon.com/images/I/61gRAsKMKtL._AC_UY218_.jpg"
        },
       ];
       

       const wheelcoverproduct = [
        {
          id: 1,
          name: "13 Inch Wheel Cover",
          description: "13 Inch Wheel Cover",
          price: 8999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/08fd80a.jpg"
        },
        {
          id: 2,
          name: " 14 Inch Wheel Cover",
          description: " 14 Inch Wheel Cover ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/83727df.jpg"
        },
        {
          id: 3,
          name: "  15 Inch Wheel Cover ",
          description: " 15 Inch Wheel Cover ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/83727df.jpg"
        },
        {
          id: 4,
          name: "  16 Inch Wheel Cover ",
          description: " 16 Inch Wheel Cover ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/05726dd.jpg"
        },
        {
          id: 5,
          name: "  17 Inch Wheel Cover ",
          description: " 17 Inch Wheel Cover ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/1360f48.jpg"
        },
       ];
       const wheelrimproduct= [
        {
          id: 1,
          name: "13 Inch Wheel Rim",
          description: "13 Inch Wheel Rim",
          price: 8999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5bf3e8f.webp"
        },
        {
          id: 2,
          name: " 14 Inch Wheel Rim",
          description: " 14 Inch Wheel Rim",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9c4a819.webp"
        },
        {
          id: 3,
          name: "  15 Inch Wheel Rim ",
          description: " 15 Inch Wheel Rim ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9c4a819.webp"
        },
        {
          id: 4,
          name: "  16 Inch Wheel Rim ",
          description: " 16 Inch Wheel Rim",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/f5b2069.webp"
        },
        {
          id: 5,
          name: "  17 Inch Wheel Rim",
          description: " 17 Inch Wheel Rim ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/f5b2069.webp"
        },
       ];
       const airsupplyproduct= [
        {
          id: 1,
          name: "Air Filter",
          description: "Air Filter",
          price: 8999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a5ef360.jpg"
        },
        {
          id: 2,
          name: " 14 Inch Wheel Rim",
          description: " 14 Inch Wheel Rim",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e878210.jpg"
        },
        {
          id: 3,
          name: "  15 Inch Wheel Rim ",
          description: " 15 Inch Wheel Rim ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/dd8a893.jpg"
        },
        {
          id: 4,
          name: "  16 Inch Wheel Rim ",
          description: " 16 Inch Wheel Rim",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/bf41d74.jpg"
        },
        {
          id: 5,
          name: "  17 Inch Wheel Rim",
          description: " 17 Inch Wheel Rim ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/f38f506.jpg"
        },
        {
          id: 6,
          name: "  17 Inch Wheel Rim",
          description: " 17 Inch Wheel Rim ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e60e505.jpg"
        },
        {
          id: 7,
          name: "  17 Inch Wheel Rim",
          description: " 17 Inch Wheel Rim ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/03c5278.jpg"
        },
        {
          id: 8,
          name: "  17 Inch Wheel Rim",
          description: " 17 Inch Wheel Rim ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7f1fc19.jpg"
        },

       ];
       const beltandchaindriveproduct= [
        {
          id: 1,
          name: "Belt Pulley",
          description: "Belt Pulley",
          price: 8999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/929ed3b.jpg"
        },
        {
          id: 2,
          name: "Crankshaft Pulley",
          description: "Crankshaft Pulley",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/8feca49.jpg"
        },
        {
          id: 3,
          name: "  Deflection Pulley ",
          description: " Deflection Pulley ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/61df28c.jpg"
        },
        {
          id: 4,
          name: "  Oil Pump Chain ",
          description: " Oil Pump Chain ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/29187f2.jpg"
        },
        {
          id: 5,
          name: " Timing Belt",
          description: " Timing Belt ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/92bef24.jpg"
        },
        {
          id: 6,
          name: "  Timing Belt Kit",
          description: " Timing Belt Kit ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ca3d002.jpg"
        },
        {
          id: 7,
          name: "  Timing Case Cover",
          description: " Timing Case Cover ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5e0c3ec.jpg"
        },
        {
          id: 8,
          name: "  Timing Chain ",
          description: " Timing Chain ",
          price: 1499.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9cf64ba.jpg"
        },

       ];

       const bigendbearingproduct= [
        {
          id: 1,
          name: "Big End Bearing at  set",
          description: "Big End Bearing at  set",
          price: 1999.99,
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdp7N7DdOj9ETtGCYTf7Mbf_L9Yn5a41RCEQ&s"
        },
       
       ];
       const camshaftpushproduct= [
        {
          id: 1,
          name: "Camshaft Bush Kit",
          description: "Camshaft Bush Kit",
          price: 1999.99,
          imageUrl: "https://75025d40dd58ab042ef4-3509ef0b9210fbf84c18b36ced24de7a.ssl.cf3.rackcdn.com/imagelibrary_lrg/118837_pic1.jpg"
        },
       
       ];
       const camshaftgearproduct= [
        {
          id: 1,
          name: "Camshaft Bush Kit",
          description: "Camshaft Bush Kit",
          price: 1999.99,
          imageUrl: "https://75025d40dd58ab042ef4-3509ef0b9210fbf84c18b36ced24de7a.ssl.cf3.rackcdn.com/imagelibrary_lrg/118837_pic1.jpg"
        },
       
       ];
       const carburettorproduct= [
        {
          id: 1,
          name: "GAS AIR MIXER METAL",
          description: "GAS AIR MIXER METAL",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
        {
          id: 2,
          name: "CARBURATOR",
          description: "CARBURATOR",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
        {
          id: 3,
          name: "CONSOLE ASSY, WITH ARMREST, MANUAL",
          description: "CONSOLE ASSY, WITH ARMREST, MANUAL",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
        {
          id: 4,
          name: "CARBURRETOR ASSY(NON ASBESTOS)",
          description: "CARBURRETOR ASSY(NON ASBESTOS)",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
       
       ];
        const carburettorflangeproduct= [
        {
          id: 1,
          name: "GAS AIR MIXER METAL",
          description: "GAS AIR MIXER METAL",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
        {
          id: 2,
          name: "CARBURATOR",
          description: "CARBURATOR",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
        {
          id: 3,
          name: "CONSOLE ASSY, WITH ARMREST, MANUAL",
          description: "CONSOLE ASSY, WITH ARMREST, MANUAL",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
        {
          id: 4,
          name: "CARBURRETOR ASSY(NON ASBESTOS)",
          description: "CARBURRETOR ASSY(NON ASBESTOS)",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b5538cd.webp"
        },
       
       ];

       const connectingrodeproduct= [
        {
          id: 1,
          name: "GAS AIR MIXER METAL",
          description: "GAS AIR MIXER METAL",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/ecbedadd9afcd8735c5e1a7fea0808ea.webp"
        },
        {
          id: 2,
          name: "CARBURATOR",
          description: "CARBURATOR",
          price: 1999.99,
          imageUrl: "https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Pleuelstange/Pleuelstange.jpg"
        },
        {
          id: 1,
          name: "GAS AIR MIXER METAL",
          description: "GAS AIR MIXER METAL",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/ecbedadd9afcd8735c5e1a7fea0808ea.webp"
        },
        {
          id: 2,
          name: "CARBURATOR",
          description: "CARBURATOR",
          price: 1999.99,
          imageUrl: "https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Pleuelstange/Pleuelstange.jpg"
        },
        
       ];

       const controlunitproduct= [
        {
          id: 1,
          name: "RELAY ASSY-GLOW PLUG",
          description: "RELAY ASSY-GLOW PLUG",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/imgsrc/55/1626077.JPG"
        },
        {
          id: 2,
          name: "Control Unit, glow plug system",
          description: "Control Unit, glow plug system",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/imgsrc/10230/1271608.JPG"
        },
        {
          id: 3,
          name: "UNIT CONTROL GLOW TIME",
          description: "UNIT CONTROL GLOW TIME",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/37acb4c.webp"
        },
        {
          id: 4,
          name: "Glow Control Unit",
          description: "Glow Control Unit",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/b65d705.webp"
        },
        
       ];
       const coolerEGRproduct= [
        {
          id: 1,
          name: "Cooler, Exhaust Gas Recirculation",
          description: "Cooler, Exhaust Gas Recirculation",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/31f0f73.webp"
        },
        {
          id: 2,
          name: "EGR Cooler",
          description: "EGR Cooler",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/31f0f73.webp"
        },
        {
          id: 3,
          name: "COOLER COMP,EGR",
          description: "COOLER COMP,EGR",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/31f0f73.webp"
        },
        {
          id: 4,
          name: "EXCHANGER-EGR",
          description:'EXCHANGER-EGR',
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/family/31f0f73.webp"
        },
        
       ];

       const cylinderblockproduct= [
        {
          id: 1,
          name: "Crankshaft",
          description: "Crankshaft",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/43fbb6a.jpg"
        },
        {
          id: 2,
          name: "Cylinder Sleeve",
          description: "ECylinder Sleeve",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/dd3f3a7.jpg"
        },
        {
          id: 3,
          name: "Dowel Pins Engine",
          description: "Dowel Pins Engine",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/88f2d19.webp"
        },
        {
          id: 4,
          name: "Gudgeon Pin",
          description:'Gudgeon Pin',
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/81f3037.jpg"
        },
        {
          id: 5,
          name: "Piston",
          description:'Piston',
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0458a05.jpg"
        },
        {
          id: 6,
          name: "Piston Rings",
          description:'Piston Rings',
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9aa7adf.jpg"
        },
        
       ];  

       
       const crankshaftsealproduct= [
        {
          id: 1,
          name: "Crankshaft Seal Set",
          description: "Crankshaft Seal Set",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/71rx2ivWScL._SX450_.jpg"
        },
        {
          id: 2,
          name: "Crankshaft Front Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/71WNsbRq4-L._AC_UL320_.jpg"
        },
        {
          id: 3,
          name: "Crankshaft Front Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/712UiX1VtBL._AC_UL320_.jpg"
        },
        {
          id: 4,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/e89892d63c365aef8483985b5e4ab53c.webp"
        },
       
       ];
       const backupcameraproduct= [
        {
          id: 1,
          name: "Crankshaft Seal Set",
          description: "Crankshaft Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/e89892d63c365aef8483985b5e4ab53c.webp"
        },
        {
          id: 2,
          name: "Crankshaft Front Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/e89892d63c365aef8483985b5e4ab53c.webp"
        },
        {
          id: 3,
          name: "4.3 TFT Rear View Dashboard Screen with Connecting Cable and Black Camera",
          description: "4.3 TFT Rear View Dashboard Screen with Connecting Cable and Black Camera",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/9146abaeb1fff5a55a15f02dd1b37c0f.webp"
        },
        {
          id: 4,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/61Ya4Duq24L._AC_UL320_.jpg"
        },
       
       ];
       const carDecalStickerProduct= [
        {
          id: 1,
          name: "Reflector Strips Sticker (Set of 2)",
          description: "Reflector Strips Sticker (Set of 2)",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/2617c71fadea5363ce81497c20e6bd5e.webp"
        },
        
       ];
       const carExteriorAccessoriesProduct= [
        {
          id: 1,
          name: "Car Cover",
          description: "Car Cover",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4be0553.jpg"
        },
        {
          id: 2,
          name: "Door Guard",
          description: "Door Guard",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0080112.jpg"
        },
        {
          id: 3,
          name: "Mirror Accessories",
          description: "Mirror Accessories",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d49435b.jpg"
        },
        {
          id: 4,
          name: "Mudguard",
          description: "Mudguard",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7a7a07c.jpg"
        },
        {
          id: 5,
          name: "Rain Guard",
          description: "Rain Guard",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a2a072b.jpg"
        },
        {
          id: 6,
          name: "Tubeless Tyre Puncture Repair Kitt",
          description: "Tubeless Tyre Puncture Repair Kit",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7b38c0d.jpg"
        },
        {
          id: 7,
          name: "Tyre Inflator",
          description: "Tyre Inflator",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b09245e.jpg"
        },
        {
          id: 8,
          name: "Tyre Pressure Gauge",
          description: "Tyre Pressure Gauge",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/cdcd7a5.jpg"
        },
       
       ];
       const carInteriorAccessoriesProduct= [
        {
          id: 1,
          name: "Armrest",
          description: "Armrest",
          price: 999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/6b5cd8b.jpg"
        },
        {
          id: 2,
          name: "Ashtray",
          description: "Ashtray",
          price: 199.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c2e7d80.jpg"
        },
        {
          id: 3,
          name: "Back Rest",
          description: "Back Rest",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4907e31.jpg"
        },
        {
          id: 4,
          name: "Car Fan",
          description: "Car Fan",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/8370a32b7f290ef2c0642fb40bc56ba3.webp"
        },
        {
          id: 5,
          name: "Car Mats",
          description: "Car Mats",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/59af26f.jpg"
        },
        {
          id: 6,
          name: "Car Mobile Accessories",
          description: "Car Mobile Accessories",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/12b18ed.jpg"
        },
        {
          id: 7,
          name: "Dashboard Idol",
          description: "Dashboard Idol",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/52d1693.jpg"
        },
        {
          id: 8,
          name: "Car Organizer",
          description: "Car Organizer",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d387935.webp"
        },
       
       ];
       const emergencyBreakdownProduct= [
        {
          id: 1,
          name: "Car First Aid Kit",
          description: "Car First Aid Kit",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/148b6a0.jpg"
        },
        {
          id: 2,
          name: "Car Jack",
          description: "Car Jack",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/25b92aa.jpg"
        },
        {
          id: 3,
          name: "Car Jack Support Plate",
          description: "Car Jack Support Plate",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/caf9b84.jpg"
        },
        {
          id: 4,
          name: "Fire Extinguisher",
          description: "Fire Extinguisher",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7deb7ad.jpg"
        },
        {
          id: 5,
          name: "Safety Hammer",
          description: "Safety Hammer",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/99d1b8c.jpg"
        },
        {
          id: 6,
          name: "Stun Gun",
          description: "Stun Gun",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/fc67758.jpg"
        },
        {
          id: 7,
          name: "Tool Parts",
          description: "Tool Parts",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a55d467.jpg"
        },
        {
          id: 8,
          name: "Tow Cable",
          description: "Tow Cable",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/096ef7b.jpg"
        },
       
       ];
       const otherAccessoriesProduct= [
        {
          id: 1,
          name: "Crankshaft Seal Set",
          description: "Crankshaft Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0805040.jpg"
        },
        {
          id: 2,
          name: "Crankshaft Front Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ae13b14.jpg"
        },
        {
          id: 3,
          name: "Crankshaft Front Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/bdfcb9e.jpg"
        },
        {
          id: 4,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/bf43ac4.webp"
        },
        {
          id: 5,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/35cae37.jpg"
        },
        {
          id: 6,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/37e7271.jpg"
        },
        {
          id: 7,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a6e6b77.jpg"
        },
        {
          id: 8,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/279ff2f.jpg"
        },
        {
          id: 9,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5987601.jpg"
        },
        {
          id: 10,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5ec9dc1.jpg"
        },
        {
          id: 11,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/494b5da.jpg"
        },
        {
          id: 12,
          name: "Front  Crankshaft  Seal Set",
          description: "Crankshaft Front Seal Set",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b4de71f.jpg"
        },


       
       ];
       const mobileHolderProduct= [
        {
          id: 1,
          name: "Mobile Holder with Wireless Charging",
          description: "Mobile Holder with Wireless Charging",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/6fe51834d472f72277f094770f160244.webp"
        },
        {
          id: 2,
          name: "Clamp X Car-Vent Mobile Holder",
          description: "Clamp X Car-Vent Mobile Holder",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/49e664779dd6bf8434289c26af591e93.webp"
        },
        {
          id: 3,
          name: "Magnetic Mobile Stand",
          description: "Magnetic Mobile Stand",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/2ae7a2e1680d32b162f993e6cb7e2f05.webp"
        },
        {
          id: 4,
          name: "Car AC Vent Mobile Holder",
          description: "Car AC Vent Mobile Holder",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/eb75b847c0bca14950a7b41103b94813.webp"
        },
       
       ];
       const beamAxleProduc= [
        {
          id: 1,
          name: "Driven Solid Beam Axle",
          description: "Driven Solid Beam Axle",
          price: 19099.99,
          imageUrl: "https://www.zf.com/public/FirstSpirit749x499WebP/SolidBeamAxle_71906.webp"
        },
        {
          id: 2,
          name: " Front Beam Axle",
          description: "Front Beam Axle",
          price: 24999.99,
          imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/3/WE/XH/QM/39391301/sigma-front-axle-beam.jpg"
        },
        {
          id: 3,
          name: "Beam axle",
          description: "Beam axle",
          price: 19999.99,
          imageUrl: "https://www.shutterstock.com/image-photo/rear-suspension-crossmember-axle-beam-600nw-2102214541.jpg"
        },
        {
          id: 4,
          name: "Beam axle",
          description: "Beam axle",
          price: 1999.99,
          imageUrl: "https://cdn02.plentymarkets.com/eqb020jpkda1/item/images/240162/full/240162-P1690505-Hinterachse-Seat-Ibiza---Cordoba-Typ-6J--08-14-.jpg"
        },
       
       ];
       const bodyAccessoriesProduct= [
        {
          id: 1,
          name: "Mobile Holder with Wireless Charging",
          description: "Mobile Holder with Wireless Charging",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/6fe51834d472f72277f094770f160244.webp"
        },
        {
          id: 2,
          name: "Clamp X Car-Vent Mobile Holder",
          description: "Clamp X Car-Vent Mobile Holder",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/6b5cd8b.jpg"
        },
        {
          id: 3,
          name: "Dashboard Mats",
          description: "Dashboard Mats",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d3a7907.jpg"
        },
        {
          id: 4,
          name: "Gear Lever Knob",
          description: "Gear Lever Knob",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a838b2e.jpg"
        },
       
       ];
       const bodyRubberStopProduct= [
        {
          id: 1,
          name: "Mobile Holder with Wireless Charging",
          description: "Mobile Holder with Wireless Charging",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/6fe51834d472f72277f094770f160244.webp"
        },
        {
          id: 2,
          name: "Clamp X Car-Vent Mobile Holder",
          description: "Clamp X Car-Vent Mobile Holder",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/49e664779dd6bf8434289c26af591e93.webp"
        },
        {
          id: 3,
          name: "Magnetic Mobile Stand",
          description: "Magnetic Mobile Stand",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/2ae7a2e1680d32b162f993e6cb7e2f05.webp"
        },
        {
          id: 4,
          name: "Car AC Vent Mobile Holder",
          description: "Car AC Vent Mobile Holder",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/eb75b847c0bca14950a7b41103b94813.webp"
        },
       
       ];
       const bodyFrameProduct= [
        {
          id: 1,
          name: "Body Shell",
          description: "Body Shell",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/322d06a.jpg"
        },
        {
          id: 2,
          name: "Chassis",
          description: "Chassis",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/92b134e.jpg"
        },
        {
          id: 3,
          name: "Locking Pins",
          description: "Locking Pins",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ee25150.webp"
        },
        {
          id: 4,
          name: "Support Frame",
          description: "Support Frame",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/973aa93.jpg"
        },
       
       ];
       const bonnetProduct= [
        {
          id: 1,
          name: "Bonnet Hinge",
          description: "Bonnet Hinge",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d0c6f7e.jpg"
        },
        {
          id: 2,
          name: "Bonnet Lid",
          description: "Bonnet Lid",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/805ddf2.jpg"
        },
        {
          id: 3,
          name: "Bonnet Lock",
          description: "Bonnet Lock",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d07fe59.jpg"
        },
        {
          id: 4,
          name: "Bonnet Seal",
          description: "Bonnet Seal",
          price: 1999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/0bd6e33.jpg"
        },
       
       ];
       const bumperProduct= [
        {
          id: 1,
          name: "Front Bumper",
          description: "Front Bumper",
          price: 12999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/c7c8de4f1b9ec994ee1a1a87156292ce.webp"
        },
        {
          id: 2,
          name: "Rear Bumper",
          description: "Rear Bumperr",
          price: 11999.99,
          imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/5fc0175.jpg"
        },
        
       ];
       const bumperBracketProduct= [
        {
          id: 1,
          name: 'Front Bumper Bracket',
          description: "Front Bumper Bracket",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/41MTEJurY9L._SX425_.jpg"
        },
       
       ];
       const bumperTrimProduct= [
        {
          id: 1,
          name: " Rear Bumper Chrome ",
          description: "Rear Bumper Chrome ",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/21Zs2RRNvaL._AC_UY218_.jpg"
        },
        
       ];
       const centralLockingSystemProduct= [
        {
          id: 1,
          name: "Central Lock for All Cars",
          description: "Central Lock for All Cars",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/61ncusCuNmL._SX522_.jpg"
        },
        {
          id: 2,
          name: " Central Kit Door Lock Vehicle Keyless Entry System",
          description: "Remote Central Kit Door Lock Vehicle Keyless Entry System",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/51FHmaOjG6L._AC_UL320_.jpg"
        },
        {
          id: 3,
          name: "Locking Power Door Lock System ",
          description: "Locking Power Door Lock System ",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/51x2zrrAXvL._AC_UL320_.jpg"
        },
        {
          id: 4,
          name: "Double Protection Car Steering Wheel Lock with Clutch Pedal, Brake Pedal",
          description: "Double Protection Car Steering Wheel Lock with Clutch Pedal, Brake Pedal",
          price: 1999.99,
          imageUrl: "https://m.media-amazon.com/images/I/61o30VzY-jL._AC_UL320_.jpg"
        },
      ];
        const canopyProduct= [
          {
            id: 1,
            name: "Car Umbrella/ Folded Sunproof Canopy Cover (Dark Blue)",
            description: "Car Umbrella/ Folded Sunproof Canopy Cover (Dark Blue)",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71QZKDq3TkL._AC_UL320_.jpg"
          },
          
         
        ];
        const beltProduct= [
          {
            id: 1,
            name: "Timing Belt",
            description: "Timing Belt",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/6301abd.jpg"
          },
          {
            id: 2,
            name: "Timing Belt Kit",
            description: "Timing Belt Kit",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/ca3d002.jpg"
          },
          {
            id: 3,
            name: "V-belt",
            description: "V-belt",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/d62eec8.jpg"
          },
          
         
        ];
        const breakProduct= [
          {
            id: 1,
            name: "Front Brake Pads",
            description: "Front Brake Pads",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/2f78507.jpg"
          },
          {
            id: 2,
            name: "Brake Repair Kit",
            description: "Brake Repair Kit",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/8945d07.jpg"
          },
          {
            id: 3,
            name: "Brake Shoes",
            description: "Brake Shoes",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/32e7eee.webp"
          },
          {
            id: 4,
            name: "Brake Fluid",
            description: "Brake Fluid",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/3de286d.jpg"
          },
          {
            id: 5,
            name: "Drum Brake",
            description: "Drum Brake",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9bda554.webp"
          },
          {
            id: 6,
            name: "Front Brake Disc",
            description: "Front Brake Disc",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/99014ce.jpg"
          },
          {
            id: 7,
            name: "Rear Brake Disc",
            description: "Rear Brake Disc",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b5d6363.webp"
          },
          {
            id: 8,
            name: "Rear Brake Pads",
            description: "Rear Brake Pads",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/27bdab0.webp"
          },
          
         
        ];
        const enginOilProduct= [
          {
            id: 1,
            name: "Engine Oil 5W-30 (3.5L)",
            description: "Engine Oil 5W-30 (3.5L)",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/89c1bc29f88ad6a750d63ad8114e7b64.webp"
          },
          {
            id: 2,
            name: "Engine Oil 5W-30 (3L) ",
            description: "Engine Oil 5W-30 (3L) ",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/882e703fa67b05d142dcdbb55e0e2c06.webp"
          },
          {
            id: 3,
            name: "Engine Oil 20W-50 (3.5L)",
            description: "Engine Oil 20W-50 (3.5L",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/445778d01323cae99feab69a09fd2cc2.webp"
          },
          {
            id: 4,
            name: "Engine Oil 5W-30 (3.5L) ",
            description: "Engine Oil 5W-30 (3.5L) ",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/29d8f469fce9d10225663480233179b5.webp"
          },
          
         
        ];
        const filterProduct= [
          {
            id: 1,
            name: "Air Filter",
            description: "Air Filter",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/a16bbf6.jpg"
          },
          {
            id: 2,
            name: "Cabin Filter",
            description: "Cabin Filter",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4adac9b.jpg"
          },
          {
            id: 3,
            name: "Fuel Filter",
            description: "Fuel Filter",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c76c371.jpg"
          },
          {
            id: 4,
            name: "Oil Filter",
            description: "Oil Filter",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/8bb8bef.jpg"
          },
          
         
        ];
        const glowPlugProduct= [
          {
            id: 1,
            name: "Glow Plug",
            description: "Glow Plug",
            price: 1999.99,
            imageUrl: "https://s19539.pcdn.co/wp-content/uploads/2021/12/glow-plugs.jpg"
          },
          
         
        ];
        const hornProduct= [
          {
            id: 1,
            name: "Universal Europa Horn (Set of 2)",
            description: "Universal Europa Horn (Set of 2)",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/7c4c00ed34ff73f7d5a469522dd60ff4.webp"
          },
          {
            id: 2,
            name: "Universal Europa Horn (Set of 2)",
            description: "Universal Europa Horn (Set of 2)",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/85a835b9f68e668f44115f72db9d6d59.webp"
          },
          {
            id: 3,
            name: "Universal Symphony Fanfare Horn (Set of 2)",
            description: "Universal Symphony Fanfare Horn (Set of 2)",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/074f47d31432a61702fd75f06dbb6c6b.webp"
          },
          {
            id: 4,
            name: "Universal Black Pearl Trumpet Horn (Set of 2)",
            description: "Universal Black Pearl Trumpet Horn (Set of 2)",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/08af5b4b6bbcbf7cd6b08a93d9335f64.webp"
          },
          
         
        ];
        const lightProduct= [
          {
            id: 1,
            name: "Fog Lamp",
            description: "Fog Lamp",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/2f94c53.jpg"
          },
          {
            id: 2,
            name: "Headlight",
            description: "Headlight",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/fbefce9.jpg"
          },
          {
            id: 3,
            name: "Indicator",
            description: "Indicator",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/54a3f2e.jpg"
          },
          {
            id: 4,
            name: "Tail Light",
            description: "Tail Light",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/4ff3573.jpg"
          }
         
        ];
        const repairServiceKitProduct= [
          {
            id: 1,
            name: "Oil & Fuel Filter Kit",
            description: "Oil & Fuel Filter Kit",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/EK-1513.jpg_6187992.webp"
          },

          {
            id: 2,
            name: "Filter Kit (Oil Filter+Fuel Filter)",
            description: "Filter Kit (Oil Filter+Fuel Filter)",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/OilFilterPurolator.jpg_8957de8.webp"
          },

          {
            id: 3,
            name: "Filter Kit ",
            description: "Filter Kit ",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/FuelFilterPurolator.jpg_1c38be7.webp"
          },

          {
            id: 5,
            name: "Filter Kit ",
            description: "Filter Kit ",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_part/images/parts/EK-1513.jpg_6187992.webp"
          },
          
         
        ];

        const shockAbsorberProduct= [
          {
            id: 1,
            name: "Front Shock Absorber",
            description: "Front Shock Absorber",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/7ffcac5.jpg"
          },
          {
            id: 1,
            name: "Rear Shock Absorber",
            description: "Rear Shock Absorber",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c5fc1e1.jpg"
          },
          
         
        ];
        const sparkPlugProduct= [
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          
         
        ];
        const alternatorProduct= [
          {
            id: 1,
            name: "Alternator Assembly",
            description: "Alternator Assembly",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9e42d15.jpg"
          },
          
          {
            id: 2,
            name: "Alternator Bearing",
            description: "Alternator Bearing",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/bce414f.jpg"
          },
          {
            id: 3,
            name: "Alternator Bracket",
            description: "Alternator Bracket",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/cdac20f.jpg"
          },
          {
            id: 4,
            name: "Alternator Carbon Brush",
            description: "Alternator Carbon Brush",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/635cd33.jpg"
          },
          {
            id: 5,
            name: "Alternator Carbon Brush Holder",
            description: "Alternator Carbon Brush Holder",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/e687f73.jpg"
          },
          {
            id: 6,
            name: "Alternator Cover",
            description: "Alternator Cover",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/b059c58.jpg"
          },
          {
            id: 7,
            name: "Alternator Pulley",
            description: "Alternator Pulley",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/c5dd61e.jpg"
          },
          {
            id: 8,
            name: "Alternator Rectifier",
            description: "Alternator Rectifier",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/9aa7483.jpg"
          },
        ]; 
        
        const antennaCableProduct= [
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/517Ccjqt9hL._AC_UY218_.jpg"
          },
          {
            id: 2,
            name: "Car FM AM Radio Antenna Aerial ",
            description: "Car FM AM Radio Antenna Aerial ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/31XDYs4PQgL._AC_UY218_.jpg"
          },
          {
            id: 3,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61+4Xa4vOgL._AC_UY218_.jpg "
          },
          {
            id: 4,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51l8eBfdsKL._AC_UY218_.jpg"
          },
        ];
        
        const audioSystemProduct= [
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/17adfed.jpg"
          },
          {
            id: 2,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/148a59a.jpg"
          },
          {
            id: 3,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/314cee3.jpg"
          },
          {
            id: 4,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://boodmo.com/media/cache/catalog_image/images/categories/1a23075.jpg"
          },
          
         
        ];
        
        const batteryProduct= [
          {
            id: 1,
            name: "Amaron  12 Volts 35Ah ",
            description: "Amaron  12 Volts 35Ah",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61NUvpNaN4L._AC_UY218_.jpg"
          },
          {
            id: 2,
            name: "Exide  (12V, 35Ah)",
            description: "Exide  (12V, 35Ah)",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/31D+GmrdmaL._AC_UY218_.jpg"
          },
          {
            id: 3,
            name: "Tata Green Car Battery ",
            description: "Tata Green Car Battery",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41X-EDDlpNL._AC_UY218_.jpg"
          },
          {
            id: 4,
            name: "Tata Green Car Battery ",
            description: "Tata Green Car Battery",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41OHFE9F39L._AC_UY218_.jpg"
          },
          
         
        ];

         
        const batteryCableProduct= [
          {
            id: 1,
            name: "Jumper Cable Battery Storage Wire",
            description: "Jumper Cable Battery Storage Wire",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/91feHes7GnL._AC_UL320_.jpg"
          },
          {
            id: 2,
            name: "Jumper Cable Battery Storage Wire",
            description: "Jumper Cable Battery Storage Wire",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61HkAy6nnFL._AC_UL320_.jpg"
          },
          {
            id: 3,
            name: "Jumper Cable Battery Storage Wire",
            description: "Jumper Cable Battery Storage Wire",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41h9eZC+16L._AC_UL320_.jpg"
          },
          {
            id: 3,
            name: " Jumper Cable Battery Storage Wire ",
            description: "Jumper Cable Battery Storage Wire",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61b5CaadgYL._AC_UL320_.jpg"
          },
          
          
        ];
        const  batteryTerminalProduct= [
          {
            id: 1,
            name: " Brass Battery Terminal(Tin plated)",
            description: "Brass Battery Terminal(Tin plated)",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51gnhD6C+3L._AC_UY218_.jpg"
          },
          {
            id: 2,
            name: "Copper Battery Terminal(Tin plated)",
            description: "Copper Battery Terminal(Tin plated)",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71xTc4isOUL._AC_UY218_.jpg   "
          },
          {
            id: 3,
            name: "Battery Terminals Adjustable Clamps (Set of 2)",
            description: " Battery Terminals Adjustable Clamps (Set of 2)",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61H38txAv6L._AC_UY218_.jpg"
          },
          {
            id: 4,
            name: "Battery Terminals Adjustable Clamps (Set of 2)",
            description: "Battery Terminals Adjustable Clamps (Set of 2)",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41f7YNnS9pL._AC_UY218_.jpg"
          },
          
         
        ];
        const  batteryHolderProduct= [
          {
            id: 1,
            name: "CAROMATIC® Battery Holder ",
            description: "CAROMATIC® Battery Holder ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41GYGIH6fyL._AC_UY218_.jpg"
          },
          {
            id: 2,
            name: "CAROMATIC® Battery Holder ",
            description: "CAROMATIC® Battery Holder ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61Xw1m2wihL._AC_UY218_.jpg"
          },
          {
            id: 3,
            name: "CAROMATIC® Battery Holder ",
            description: "CAROMATIC® Battery Holder ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/415g3RBTrEL._AC_UY218_.jpg"
          },
          {
            id: 4,
            name: "CAROMATIC® Battery Holder ",
            description: "CAROMATIC® Battery Holder ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51rkqnSOS9L._AC_UY218_.jpg"
          },
          
         
        ];
        const  batteryCoverProduct = [
          {
            id: 1,
            name: " Battery Holder with Cover and On/Off Switch ",
            description: "Battery Holder with Cover and On/Off Switch",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/31ND+uqlI1L._AC_UY218_.jpg"
          },
          {
            id: 2,
            name: "Insulating Battery Cover Positive",
            description: "Insulating Battery Cover Positive",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71EgNX4-jOL._AC_UY218_.jpg"
          },
          {
            id: 3,
            name: "Car Engine Battery Protect Cover ",
            description: "Car Engine Battery Protect Cover",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51eDKY8Q2xS._AC_UY218_.jpg"
          },
          {
            id: 4,
            name: "Insulating Battery Cover Positive",
            description: " Insulating Battery Cover Positive",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51BqlIR6ZvL._AC_UY218_.jpg"
          },
          
         
        ];


        const  bonnetReleaseCableProduct = 
        [
          {
            id: 1,
            name: "Bonnet Hood Latch Release Lock Opener Cable",
            description: "Bonnet Hood Latch Release Lock Opener Cable",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/712z1UAFCaL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Bonnet Hood Latch Release Lock Opener Cable",
            description: "Bonnet Hood Latch Release Lock Opener Cable",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51IHqeOvVRL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Bonnet Hood Latch Release Lock Opener Cable",
            description: "Bonnet Hood Latch Release Lock Opener Cable",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51WleCPZHZL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: " Bonnet Hood Latch Release Lock Opener Cable",
            description: "Bonnet Hood Latch Release Lock Opener Cable",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/316DzHi0spL._AC_UY218_.jpg"
          },
          
         
        ];
        const  controlUnitProduct = 
        [
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
        ];
        const  electricDriveProduct = 
        [
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
        ];

        const  alternatorBearing = 
        [
          {
            id: 1,
            name: "Alternator Bearing",
            description: "Alternator Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71LQTCq+MNL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Alternator Bearing",
            description: "Alternator Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41mkBVWu68L._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Alternator Bearing",
            description: "Alternator Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41mkBVWu68L._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Alternator Bearing",
            description: "Alternator Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/31-4PS2FzQL._AC_UY218_.jpg"
          },
        ];
       
        
        const   bigEndBearingProduct = 
        [
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
        ];
        const   clutchReleaseBearingProduct = 
        [
          {
            id: 1,
            name: "Clutch Release Bearing",
            description: "Clutch Release Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/618ecLVsOwL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Clutch Release Bearing Assembly",
            description: "Clutch Release Bearing Assembly",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71D-VEME4VL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Clutch Release Bearing",
            description: "Clutch Release Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/81uD-KIh1xL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Clutch Release Bearing Assembly",
            description: "Clutch Release Bearing Assembly",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71i0wq4TepL._AC_UY218_.jpg"
          },
        ];
        const   crankshaftBearingProduct = 
        [
          {
            id: 1,
            name: "Diameter Rail Mount Bore Ball Bearing Block Mounted Pillow Insert Bearing (2pcs)",
            description: "Diameter Rail Mount Bore Ball Bearing Block Mounted Pillow Insert Bearing (2pcs)",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61a41K46avS._AC_UY218_.jpg"
          },
         
        ];


        const   pilotBearingProduct = 
        [
          {
            id: 1,
            name: "Pillow Ball Bearing UCF211",
            description: "Pillow Ball Bearing UCF211",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/410-uiSN2OL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Pillow Ball Bearing UCF210",
            description: "Pillow Ball Bearing UCF210",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/410vwl-UU5L._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "HRB BEARING Pillow Ball Bearing, UCP205",
            description: "HRB BEARING Pillow Ball Bearing, UCP205",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41IpY5eeBQL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "12mm  Pillow Block Insert Bearing KP001",
            description: "12mm  Pillow Block Insert Bearing KP001",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51xY01t6jZL._AC_UY218_.jpg"
          },
        ];

        const   rearWheelBearingProduct = 
        [
          {
            id: 1,
            name: "NBC  Bearing For Rear Wheel",
            description: "NBC  Bearing For Rear Wheel ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/41i1EavDV4L._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: " Light Weight Rear Wheel Bearing",
            description: "Light Weight Rear Wheel Bearing ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61v69-IOwqL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Pillow Ball Bearing UC206",
            description: "Pillow Ball Bearing UC206",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51qzvBLJtgL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Generic Wheel Bearing",
            description: "Generic Wheel Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61yejwt0PsL._AC_UY218_.jpg"
          },
        ];

        const   transmissionBearingProduct = 
        [
          {
            id: 1,
            name: "Taper Roller Bearing India",
            description: "Taper Roller Bearing India",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61eiZFZO5YL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Ball Bearing India",
            description: "Ball Bearing India",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51dmOrnED3L._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
          {
            id: 1,
            name: "Spark Plug",
            description: "Spark Plug",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp1ocfFyYoa72CfPyvRa_lcxAg4HCcUcuww&s"
          },
        ];

        const   shockAbsorberBearingProduct = 
        [
          {
            id: 1,
            name: "Shock Absorber Bearings Fit For Opel Car",
            description: " Shock Absorber Bearings Fit For Opel Car ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/610FbuxLtWL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: " Lower Shock Absorber Kit",
            description: " Lower Shock Absorber Kit",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61h70BYr-bL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71xaLElYQlL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51905CH5H-L._AC_UY218_.jpg"
          },
        ];
        
        const   clutchCableProduct = 
        [
          {
            id: 1,
            name: "Car Clutch Cable For  Modnum1217",
            description: " Car Clutch Cable For  Modnum1217 ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/81-2IVkc8oL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: " Car Clutch Cable For  Modnum 4217",
            description: " Car Clutch Cable For  Modnum 4217 ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/81-2IVkc8oL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Car Clutch Cable For  Modnum 417",
            description: "Car Clutch Cable For  Modnum 417",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/81-2IVkc8oL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Car Clutch Cable For  Modnum 217 ",
            description: "Car Clutch Cable For  Modnum 217",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/81-2IVkc8oL._AC_UY218_.jpg"
          },
        ];
        const   clutchControlSwitchProduct = 
        [
          {
            id: 1,
            name: "Clutch Control Switch MN171296",
            description: " Clutch Control Switch MN171296",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8G9_1P0Ap12CCY9Q7DmYf2_PkAY553bwOg&s"
          },
          {
            id: 1,
            name: " Clutch Control Switch MN171296",
            description: " Clutch Control Switch MN171296",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8G9_1P0Ap12CCY9Q7DmYf2_PkAY553bwOg&s"
          },
          {
            id: 1,
            name: "Clutch Control Switch MN171296",
            description: "Clutch Control Switch MN171296",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8G9_1P0Ap12CCY9Q7DmYf2_PkAY553bwOg&s"
          },
          {
            id: 1,
            name: "Clutch Control Switch MN171296 ",
            description: "Clutch Control Switch MN171296",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8G9_1P0Ap12CCY9Q7DmYf2_PkAY553bwOg&s"
          },
        ];
        const   clutchDiscProduct = 
        [
          {
            id: 1,
            name: "Car Clutch Plate",
            description: " Car Clutch Plate ",
            price: 1999.99,
            imageUrl: "https://4.imimg.com/data4/UT/MK/MY-491645/clutch-plate.jpg"
          },
          {
            id: 1,
            name: " Car Clutch Plate ",
            description: " Car Clutch Plate ",
            price: 1999.99,
            imageUrl: "https://5.imimg.com/data5/PV/QX/MY-23850324/car-clutch-plate.jpg"
          },
          {
            id: 1,
            name: " Car Clutch Plate  ",
            description: "Car Clutch Plate  ",
            price: 1999.99,
            imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/3/ZL/YP/EI/39391301/tata-car-clutch-plate.jpg"
          },
          {
            id: 1,
            name: "Car Clutch Plate",
            description: "Car Clutch Plate",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEG0nu1tFXeyggKLQUE3tnFY0GDLmkJZcjw&s"
          },
        ];
        const   clutchHoseProduct = 
        [
          {
            id: 1,
            name: " Flexible Clutch Hose ",
            description: " Flexible Clutch Hose ",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPt2xi35Wwqo1mq-GjpEB1nZvrfjDRXuOmg&s"
          },
          {
            id: 1,
            name: " Clutch Hose, 84-89 300ZX",
            description: " Clutch Hose, 84-89 300ZX",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguXLA_5TwAC8kmr312FRzxbps1iyp3ddY8A&s"
          },
          {
            id: 1,
            name: "4 Mtr Clutch Hose",
            description: "4 Mtr Clutch Hose ",
            price: 1999.99,
            imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/4/298907432/AC/SK/QR/75225285/4-meter-clutch-hose-cable-500x500.jpeg"
          },
          {
            id: 1,
            name: "Centric 151.66020 Clutch Hose",
            description: "Centric 151.66020 Clutch Hose",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/4142Ymmiv2L._AC_UF1000,1000_QL80_.jpg"
          },
        ];
        const   clutchKitProduct = 
        [
          {
            id: 1,
            name: " Car Clutch Kit",
            description: "  Car Clutch Kit ",
            price: 1999.99,
            imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/1/HG/UH/WL/37300586/tata-clutch-assembly.jpg "
          },
          {
            id: 1,
            name: "LUK Car Clutch Kit",
            description: " LUK Car Clutch Kit",
            price: 1999.99,
            imageUrl: "https://5.imimg.com/data5/ZC/GD/SQ/SELLER-54594711/topran-filters.jpg"
          },
          {
            id: 1,
            name: "Valeo 404539 Clutch Kit (With Bearing) ",
            description: "Valeo 404539 Clutch Kit (With Bearing) ",
            price: 1999.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXOhwEcfgtJm8lKxh0pySFJmtZFdvCGUMIw&s"
          },
          {
            id: 1,
            name: "LuK 08-051 Clutch Set",
            description: "LuK 08-051 Clutch Set",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/916KW4wbo3L._AC_UF1000,1000_QL80_.jpg"
          },
        ];
        const   clutchMasterProduct = 
        [
          {
            id: 1,
            name: "Shock Absorber Bearings Fit For Opel Car",
            description: " Shock Absorber Bearings Fit For Opel Car ",
            price: 1999.99,
            imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/11/YH/HH/YQ/30352114/0655bd50-39c4-4429-bab5-6a30b4b659c2.jpg"
          },
          {
            id: 1,
            name: " Lower Shock Absorber Kit",
            description: " Lower Shock Absorber Kit",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61h70BYr-bL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71xaLElYQlL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51905CH5H-L._AC_UY218_.jpg"
          },
        ];
        const   clutchMasterReservoirProduct = 
        [
          {
            id: 1,
            name: "Shock Absorber Bearings Fit For Opel Car",
            description: " Shock Absorber Bearings Fit For Opel Car ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/610FbuxLtWL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: " Lower Shock Absorber Kit",
            description: " Lower Shock Absorber Kit",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61h70BYr-bL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71xaLElYQlL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51905CH5H-L._AC_UY218_.jpg"
          },
        ];
        const   clutchPedalProduct = 
        [
          {
            id: 1,
            name: "Shock Absorber Bearings Fit For Opel Car",
            description: " Shock Absorber Bearings Fit For Opel Car ",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/610FbuxLtWL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: " Lower Shock Absorber Kit",
            description: " Lower Shock Absorber Kit",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/61h70BYr-bL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/71xaLElYQlL._AC_UY218_.jpg"
          },
          {
            id: 1,
            name: "Shock Absorber Bearing",
            description: "Shock Absorber Bearing",
            price: 1999.99,
            imageUrl: "https://m.media-amazon.com/images/I/51905CH5H-L._AC_UY218_.jpg"
          },
        ];

  return (

    <Router>
      <div>
        <Navbar cartCount={cartCount}  />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} /> 
          <Route path="/true" element={<True />} /> 
          <Route path="/certificates" element={<CertificateSlider />} />
          <Route path="/bracelet" element={<BraceletProducts products={productsPage1} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/earrings" element={<EarringProducts products={productsPage2} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/mens-collection" element={<MensCollectionProducts products={productsPage3} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/rings" element={<RingProducts products={productsPage5} addToCart={addToCart} addToWishlist={addToWishlist} />}  />
          <Route path="/tennis-bracelets" element={<TennisBraceletProducts products={productsPage4} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/pendant" element={<PendantProducts products={productsPage6} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Alloywheel" element={<AlloywheelProduct products={alloywheel} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/PassengerCarTyre" element={<PassengerCarTyreProduct products={passengercartyre} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/TyreTube" element={<TyreTubeProduct products={tyretubeproduct} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/TyreValve" element={<TyrevalveProduct products={tyrevalveproduct} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/WheelCover" element={<WheelCoverProduct  products={wheelcoverproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/WheelRim" element={<WheelRimProduct  products={wheelrimproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Airsupply" element={<AirsupplyProduct  products={airsupplyproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BeltandChainDrive" element={<BeltandChainDriveProduct  products={beltandchaindriveproduct  } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BigEndBearing" element={<BigEndBearingProduct  products={bigendbearingproduct  } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CamshaftBush" element={<CamshaftBushProduct  products={camshaftpushproduct  } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CamshaftGear" element={<CamshaftGearProduct  products={camshaftgearproduct  } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Carburettor" element={<CarburettorProduct products={carburettorproduct  } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/carburettorFlange" element={<CarburettorFlangeProduct products={carburettorflangeproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Connectingrod" element={<ConnectingrodProduct products={connectingrodeproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ControlUnit" element={<ControlUnitProduct products={controlunitproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CoolerEGR" element={<CoolerEGRProduct products={coolerEGRproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CylinderBlock" element={<CylinderBlockProduct products={cylinderblockproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CrankshaftSeal" element={<CrankshaftSealProduct products={crankshaftsealproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BeamAxle" element={<BeamAxleProduct products={beamAxleProduc } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BodyAccessories" element={<BodyAccessoriesProduct products={bodyAccessoriesProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BodyFrame" element={<BodyFrameProduct products={bodyFrameProduct} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BodyRubberStop" element={<BodyRubberStopProduct products={bodyRubberStopProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Bonnet" element={<BonnetProduct products={bonnetProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Boot" element={<BonnetProduct products={crankshaftsealproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Bumper" element={<BumperProduct products={bumperProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BumperBracket" element={<BumperBracketProduct products={bumperBracketProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BumperTrim" element={<BumperTrimProduct products={bumperTrimProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Canopy" element={<CanopyProduct products={canopyProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CentralLockingSystem" element={<CentralLockingSystemProduct products={centralLockingSystemProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BackupCamera" element={<BackupCameraProduct products={backupcameraproduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CarDecalSticker" element={<CarDecalStickerProduct products={carDecalStickerProduct} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CarExteriorAccessories" element={<CarExteriorAccessoriesProduct products={carExteriorAccessoriesProduct} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CarInteriorAccessories" element={<CarInteriorAccessoriesProduct products={carInteriorAccessoriesProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/EmergencyBreakdown" element={<EmergencyBreakdownProduct products={emergencyBreakdownProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/OtherAccessories" element={<OtherAccessoriesProduct products={otherAccessoriesProduct} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/MobileHolder" element={<MobileHolderProduct products={mobileHolderProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          
          
          <Route path="/Belt" element={<BeltProduct products={beltProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Break" element={<BreakProduct products={breakProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/EnginOil" element={<EnginOilProduct products={enginOilProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Filter" element={<FilterProduct products={filterProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/GlowPlug" element={<GlowPlugProduct products={glowPlugProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Horn" element={<HornProduct products={hornProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Light" element={<LightProduct products={lightProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/RepairServiceKit" element={<RepairServiceKitProduct products={repairServiceKitProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ShockAbsorber" element={<ShockAbsorberProduct products={shockAbsorberProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/SparkPlug" element={<SparkPlugProduct products={sparkPlugProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />


          <Route path="/Alternator" element={<AlternatorProduct products={alternatorProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/AntennaCable" element={<AntennaCableProduct products={antennaCableProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/AudioSystem" element={<AudioSystemProduct products={audioSystemProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/Battery" element={<BatteryProduct products={batteryProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BatteryCable" element={<BatteryCableProduct products={batteryCableProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BatteryCover" element={<BatteryCoverProduct products={batteryCoverProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BatteryHolder" element={<BatteryHolderProduct products={batteryHolderProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BatteryTerminal" element={<BatteryTerminalProduct products={batteryTerminalProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BonnetReleaseCable" element={<BonnetReleaseCableProduct products={bonnetReleaseCableProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CentralLockingSystem" element={<CentralLockingSystemProduct products={centralLockingSystemProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ControlUnit" element={<ControlUnitProduct products={controlUnitProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ElectricDrive" element={<ElectricDriveProduct products={electricDriveProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />


          <Route path="/AlternatorBearing" element={<AlternatorBearingProduct products={alternatorBearing } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/BigEndBearing" element={<BigEndBearingProduct products={bigEndBearingProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchReleaseBearing" element={<ClutchReleaseBearingProduct products={clutchReleaseBearingProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/CrankshaftBearing" element={<CrankshaftBearingProduct products={crankshaftBearingProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/PilotBearing" element={<PilotBearingProduct products={pilotBearingProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/RearWheelBearing" element={<RearWheelBearingProduct products={rearWheelBearingProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ShockAbsorberBearing" element={<ShockAbsorberBearingProduct products={shockAbsorberBearingProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/TransmissionBearing" element={<TransmissionBearingProduct products={transmissionBearingProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />


          <Route path="/ClutchCable" element={<ClutchCableProduct products={clutchCableProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchControlSwitch" element={<ClutchControlSwitchProduct products={clutchControlSwitchProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchDisc" element={<ClutchDiscProduct products={clutchDiscProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchHose" element={<ClutchHoseProduct products={clutchHoseProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchKit" element={<ClutchKitProduct products={clutchKitProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchMaster" element={<ClutchMasterProduct products={clutchMasterProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchMasterReservoir" element={<ClutchMasterReservoirProduct products={clutchMasterReservoirProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/ClutchPedal" element={<ClutchPedalProduct products={clutchPedalProduct } addToCart={addToCart} addToWishlist={addToWishlist}/>} />



          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>} />
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/return-policy" element={<Return/>} />
          <Route path="/shipping-policy" element={<ShippingPolicy/>} />
          <Route path="/buyback-policy" element={<BuybackPolicy/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<TermsConditons/>}/>
          <Route path='/OfferPage' element={<OfferPage/>}/>
          <Route path="/Engine" element={<Engine/>}/>
          <Route path='/Body' element={<Body/>}/>
          <Route path='/Bearing' element={<Bearing/>}/>
          <Route path='/ClutchSystem' element={<ClutchSystem/>} />
          <Route path='/CarAccessories'element={<CarAccessories/>}/>
          <Route path='/OfferStripe' element={<OfferStripe/>}/>
          <Route path='/Maintenance' element={<Maintenance/>}/>
          <Route path='/ElectricCom' element={<ElectricCom/>}/>
          <Route path='/TyresandAlloys' element={<TyresandAlloys/>}/>
          <Route path='./Alloywheel' element={<Alloywheel/>}/>
           
      </Routes> 
      </div>
    </Router>
   
  );
};

export default App;
