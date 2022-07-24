import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'
import NavBar from './Nav'
import Footer from './Footer'
// import ItemPage from './Item-page'
import ItemPage from './item-page/index.js'
import Login from './Login'
import ProductsPage from './Components/ProductsPage.js'
import History from './History'
import Cart from './Cart';
import Register from './Register';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <NavBar/>
      </header>

      <main>
        <Register/>
        <Login/>
        <ProductsPage/>
        <ItemPage/>
        <Cart/>
        <History/>
      </main>

      <Footer/>

    </div>
  );
}

export default App;
