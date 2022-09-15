import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Personal.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import api from "../../DAL/api";
import PagesComponent from "./PagesComponent";

function Personal() {
    const navigate = useNavigate();
    useEffect(() => {
        async function checkPermission() {
            !(await api.checkCookie()) && navigate("/login");
        }
        checkPermission();
    }, []);
    return (
        <div>
            <h1>Personal Page</h1>

            <div className="col start-position">
                <PagesComponent />

                <div className="row">
                    <div className="row">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;
