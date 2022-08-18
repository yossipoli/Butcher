import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/Nav";
import Footer from "./Components/Footer";
import ItemPage from "./Components/item-page/index.js";
import Login from "./Components/forms/Login";
import ProductsPage from "./Components/products/ProductsPage.js";
import History from "./Components/history/History";
import Cart from "./Components/cart/Cart";
import Register from "./Components/forms/Register";
import Personal from "./Components/personal/Personal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <NavBar />
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<ProductsPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route exact path="products/:product_id" element={<ItemPage />}/>
                        <Route path="/personal" element={<Personal />}>
                        </Route>
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/history" element={<History />} />
                        <Route path="*" element={<ProductsPage />} />
                    </Routes>
                </main>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
