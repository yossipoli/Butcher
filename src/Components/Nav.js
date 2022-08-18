import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavBar() {
    return (
        <Navbar className="nav" fixed="top" bg="light" expand="lg">
            <Container fluid>
                <div className="link">
                    <Link to="/">
                        <img src="/logo.png" style={{ width: "35px" }} alt="logo"/>
                        Butcher
                    </Link>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <div className="link">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="link">
                            <NavDropdown title="Categories" id="categories">
                                <NavDropdown.Item href="#action3">
                                    Chicken
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Beef
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Lamb
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Frozen
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    ALL
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className="link">
                            <Link to="/personal"> My Settings </Link>
                        </div>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        <div className="link cart">
                            <Link to="/personal/cart">
                                {" "}
                                <RiShoppingCartFill />{" "}
                            </Link>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
