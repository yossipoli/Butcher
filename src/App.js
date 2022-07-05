import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Nav'
import Footer from './Footer'
// import ItemPage from './Item-page'
import ItemPage from './item-page/index.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar/>
      </header>

      <main>
        <ItemPage/>
      </main>


      <Footer/>


    </div>
  );
}

export default App;
