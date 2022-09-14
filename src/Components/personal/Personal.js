import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Personal.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import api from "../../DAL/api";

function Personal() {
    const navigate = useNavigate();
    useEffect(() => {
        async function checkPermission() {
            !(await api.checkCookie()) && navigate('/login');
        }
        checkPermission();
    }, []);
    return (
        <div>
            <h1>Personal Page</h1>

            <div className="row start-position">
                <div className="col-3 leftCol">
                    <ListGroup as="ul">
                        <Link to="personal-details">
                            {" "}
                            <ListGroup.Item
                                as="li"
                                className="personalOption"
                                id="personalDetails"
                            >
                                {" "}
                                Personal details{" "}
                            </ListGroup.Item>{" "}
                        </Link>
                        <Link to="cart">
                            {" "}
                            <ListGroup.Item
                                as="li"
                                className="personalOption"
                                id="cart"
                            >
                                {" "}
                                My Cart{" "}
                            </ListGroup.Item>{" "}
                        </Link>
                        <Link to="history">
                            <ListGroup.Item
                                as="li"
                                className="personalOption"
                                id="history"
                            >
                                {" "}
                                Orders history{" "}
                            </ListGroup.Item>{" "}
                        </Link>
                    </ListGroup>
                </div>

                <div className="col-9">
                    <div className="row">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;
