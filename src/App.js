import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={logo} width="40px"/>
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

      </Navbar>
    
    </div>
  );
}

export default App;
