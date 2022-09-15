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
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async function getCategories() {
            setCategories(await api.getAllCategories());
        })();
    }, []);

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
                        Butcher
                    </Link>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <div className="link">
                            <NavDropdown title="Categories" id="categories">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/category/${category.name.toLowerCase()}`}
                                    >
                                        {" "}
                                        <div className="category">
                                            {category.name}
                                        </div>
                                    </Link>
                                ))}

                                <NavDropdown.Divider />
                                <Link to="/category/all">
                                    <div className="category">ALL</div>
                                </Link>
                            </NavDropdown>
                        </div>
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
                    </Nav>

                    <div>Hello {user?.first_name || "guest"}</div>
                    <div className="link">
                        {user ? (
                            <Link to="/personal/personal-details">
                                {" "}
                                My Settings{" "}
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                    <Form className="d-flex">
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
                    <div className="link">
                        {user ? (
                            <Link
                                to="/"
                                onClick={() =>
                                    api
                                        .logout()
                                        .then(window.location.replace("/"))
                                }
                            >
                                Logout
                            </Link>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
