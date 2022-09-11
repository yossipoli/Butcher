import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState /*, useContext */ } from "react";
import "./Nav.css";
// import { UserContext } from './../UserContext'
import api from "../DAL/api";

function NavBar({ user }) {

    // const [currentUser, setCurrentUser] = useState(user);

    // //TODO not renders
    // useEffect(() => {
    //     async function getUser(){
    //         setCurrentUser({...await api.getCustomer()} || null);
    //     } getUser()
    // },[user])

    let [input, setInput] = useState("");

    return (
        <Navbar className="nav" fixed="top" bg="light" expand="lg">
            <Container fluid>
                <div className="link logo">
                    <Link to="/category/all">
                        <img
                            src="/logo.png"
                            style={{ width: "35px" }}
                            alt="logo"
                        />
                        Butcher , Hello {user?.first_name || "guest"}
                    </Link>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <div className="link">
                            {/* TODO change logout link to clear cookies */}
                            {user ? (
                                <Link to="/" onClick={() => api.logout().then(window.location.replace('/'))}>
                                    Logout
                                </Link>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </div>
                        <div className="link">
                            <NavDropdown title="Categories" id="categories">
                                <Link to="/category/chicken">
                                    <div className="category">Chicken</div>
                                </Link>
                                <Link to="/category/beef">
                                    <div className="category">Beef</div>
                                </Link>
                                <Link to="/category/lamb">
                                    <div className="category">Lamb</div>
                                </Link>
                                {/* <NavDropdown.Item>
                                    <Link to="/:frozen">Frozen</Link>
                                // </NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <Link to="/category/all">
                                    <div className="category">ALL</div>
                                </Link>
                            </NavDropdown>
                        </div>
                        <div className="link">
                            {user ? (
                                <Link to="/personal"> My Settings </Link>
                            ) : (
                                ""
                            )}
                        </div>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Type your search"
                            className="me-2"
                            aria-label="Search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Link to={`/search/${input}`}>
                            <Button variant="outline-success">Search</Button>
                        </Link>
                        <div className="link cart">
                            <Link
                                to="/personal/cart"
                                style={{
                                    pointerEvents: user ? "auto" : "none",
                                }}
                            >
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
