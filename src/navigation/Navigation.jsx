import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/logotipo/logotipo.png';
import '../navigation/Navigation.css';

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <Image src={Logo} fluid width="100px" />
        </Navbar.Brand>
      </Container>
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home">
            HOME
          </Nav.Link>
          <Nav.Link as={NavLink} to="/nosotros">
            NOSOTROS
          </Nav.Link>
          <Nav.Link as={NavLink} to="/menu">
            MENU
          </Nav.Link>
          <Nav.Link as={NavLink} to="/reservas">
            RESERVAS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
