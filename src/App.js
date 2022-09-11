import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/Nav";
import Footer from "./Components/Footer";
import ItemPage from "./Components/item-page/index.js";
import Login from "./Components/forms/Login";
import ProductsPage from "./Components/products/ProductsPage.js";
import History from "./Components/history/History";
import Cart from "./Components/cart/Cart";
import Register from "./Components/forms/Register";
import Personal from "./Components/personal/Personal";
import PersonalDetails from "./Components/personal/PersonalDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import api from "./DAL/api";
// import { UserContext } from "./UserContext";

function App() {
    // const [userId, setUserId] = useState(0);
    const [user, setUser] = useState(null);

    async function getUser() {
        setUser({ ...await api.getCustomer() } || null);
    }

    useEffect(() => {
        async function checkUserCookie() {
            await api.checkCookie() && await getUser();
        } checkUserCookie()
    }, []);

    return (
        <div className="App">
            <Router>
                {/* <UserContext.Provider value={{ userId, setUserId }}> */}
                    <header className="App-header">
                        <NavBar user={user} />
                    </header>

                    <main>
                        <Routes>
                            <Route path="/" element={<ProductsPage />} />
                            <Route
                                path="/category/:categoryName"
                                element={<ProductsPage />}
                            />
                            <Route
                                path="/search/:search"
                                element={<ProductsPage />}
                            />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                exact
                                path="products/:product_id"
                                element={<ItemPage />}
                            />
                            <Route path="/personal" element={<Personal />}>
                                <Route
                                    path="personal-details"
                                    element={<PersonalDetails />}
                                />
                                <Route path="cart" element={<Cart />} />
                                <Route path="history" element={<History />} />
                            </Route>
                            <Route path="*" element={<ProductsPage />} />
                        </Routes>
                    </main>
                {/* </UserContext.Provider> */}

                <Footer />
            </Router>
        </div>
    );
}

export default App;
