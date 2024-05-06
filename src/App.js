import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import {useState} from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className='App'>
      <Router>
        <div>
          <Header
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/search'
              element={<Home />}
            />
            <Route
              path='/product/:id'
              element={<ProductDetails />}
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
