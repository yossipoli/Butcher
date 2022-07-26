import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiShoppingCartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <Navbar fixed='top' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand > <Link to="/"> 🐮Butcher </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link> 
            <Link to="/login">Login</Link>
            </Nav.Link>
            {/* <Nav.Link name="register"> 
              <Link to="/register">Register</Link> 
            </Nav.Link> */}
            <NavDropdown title="Categories" id="categories">
              <NavDropdown.Item href="#action3">Chicken</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Beef</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lamb</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Frozen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              ALL
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>
              {/* TODO  change to settings*/}
            <Link to="/history"> My Settings </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Nav.Link href="#" id="cartIcon" name="cart" >
               <Link to="/cart"> <RiShoppingCartFill/> </Link> 
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;