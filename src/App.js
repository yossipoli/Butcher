import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'
import NavBar from './Nav'
import Footer from './Footer'
import ItemPage from './item-page/index.js'
import Login from './Login'
import ProductsPage from './ProductsPage.js'
import History from './History'
import Cart from './Cart';
import Register from './Register';
import Personal from './Personal';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'

function App() {

  // const showingPage = {
  //   login: false,
  //   register: false,
  //   productsPage: false,
  //   itemPage: false,
  //   cart: false,
  //   history: false,

  // }
  
  // const [currentPage, setCurrentPage] = useState({...showingPage, ["productsPage"]:true} )

  // function changePage({target:{name}}){
  //   setCurrentPage({...showingPage, [name]:true})
  // }

  return (
    <div className="App">
      <Router>

        <header className="App-header">
          <NavBar />
        </header>

        <main>

          <Routes>
            <Route path="/" element={<ProductsPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route exact path="products/:product_id" element={<ItemPage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/personal" element={<Personal/>}/>
            <Route path="*" element={<ProductsPage/>}/>
          </Routes>


          {/* { currentPage.register && <Register/>}
          {currentPage.login && <Login/>}
          {currentPage.productsPage && <ProductsPage/>}
          {currentPage.itemPage && <ItemPage/>}
          {currentPage.cart && <Cart/>}
          {currentPage.history && <History/>}
          <ItemPage/> */}

        </main>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
