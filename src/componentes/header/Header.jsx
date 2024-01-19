

import Image from 'react-bootstrap/Image';
import banner from '../../assets/imagenes/banners/banner.png';
import banner2 from '../../assets/imagenes/banners/banner2.png';
import banner3 from '../../assets/imagenes/banners/banner3.png';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';





const Header = () => {
  return (
    
    <Carousel data-bs-theme="ligth">
    <Carousel.Item>
    <Image
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />  
   
    </Carousel.Item>
    <Carousel.Item>
    <Image
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />  
     
    </Carousel.Item>
    <Carousel.Item>
    <Image
          className="d-block w-100"
          src={banner3}
          alt="First slide"
        />  
  
    </Carousel.Item>
  </Carousel>

  )
}

export default Header;