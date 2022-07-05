import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar fixed='top' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">🐮Butcher</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">Login</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Chicken</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Beef</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lamb</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Frozen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              ALL
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            My Settings
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
            <Nav.Link href="#action1">🛒</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;