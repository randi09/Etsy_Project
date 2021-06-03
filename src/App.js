import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h1>React Redux Store</h1>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
            </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/products">
              <Products />
            </Route>

            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
