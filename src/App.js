import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {useState} from "react";
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

import {UserContext} from "./UserContext";

function App() {

    const [userId, setUserId] = useState(0)

    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <NavBar />
                </header>

                <main>
                        <UserContext.Provider value={{userId, setUserId}}>
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
                        </UserContext.Provider>
                </main>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
