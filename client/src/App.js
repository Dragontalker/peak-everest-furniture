import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './components/GlobalStore';
import Navbar from './components/Navbar';
import Shop from './components/ShopPage';
import Register from './components/RegisterPage';
import Login from './components/LoginPage';
import ShoppingCart from './components/ShoppingCart';
import NavbarExtension from './components/NavbarExtension';
import ProductPage from './components/ProductPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Navbar />
          <NavbarExtension />
          <div className="container-lg">
            <Switch>
              <Route exact path="/"><Shop /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/product"><ProductPage /></Route>
            </Switch>
          </div>
          <ShoppingCart />
          {/* <Footer /> */}
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
