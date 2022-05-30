import logo from '../logo.svg';
import React from 'react';
import'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import '../assets/cart.css';


function NavBar() {
  return (
    <div >
      <Navbar className="barra" bg="dark" variant="dark" d-flex=".justify-content-between">
        <Navbar.Brand>
        <img src={logo} width="40px" alt="logo"/>
          Logo
        </Navbar.Brand>
        <Nav>
          <NavDropdown title="Productos">
          <NavDropdown.Item href="#">Producto 1</NavDropdown.Item>
          <NavDropdown.Item href="#">Producto 2</NavDropdown.Item>
          <NavDropdown.Item href="#">Producto 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="contacto">Contacto</Nav.Link>
          <Nav.Link href="productos">Nosotros</Nav.Link>
        </Nav>
        <div ><CartWidget  items={4}/></div>

      </Navbar>
    
    </div>
  );
}

export default NavBar;