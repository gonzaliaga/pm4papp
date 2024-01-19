
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from  '../../assets/logotipo/logotipo.png';

import './Footer.css';

function Footer() {
  return (
   
    <footer>
    <Container >
      <Row className='footer' >
        <Col>
         <Image src={Logo}  className='logo_footer' fluid />
          
        </Col>
        <Col> 
             <span> Desarrollado por ROB_UX/UI</span>
        </Col>
        <Col>
        <h6>Dirección: Sn Martin Viña del mar</h6>
        </Col>
      </Row>
    </Container>
    </footer>
  );
}

export default Footer;