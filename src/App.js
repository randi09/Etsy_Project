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
import About from "./components/About";
import Cart from "./components/Cart";
import SelectedProduct from "./components/SelectedProduct";
import Pyramid from "./components/PyramidCard";
import DominoesCard from "./components/DominoesCard";
import TumblerCard from "./components/TumblerCard";
import ErrorPage from "./components/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Button } from "bootstrap";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Router>
          <div>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand className="header" href="#home">
                RLR Designs
              </Navbar.Brand>
              <Nav className="mr-auto nav-links">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/cart"> Cart </Link>
              </Nav>
              <div>
                <p>Shopping Cart</p>
              </div>
            </Navbar>
          </div>
          <div className="main-content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/iproduct/:id">
                <SelectedProduct />
              </Route>

              <Route path="/pyramid">
                <Pyramid />
              </Route>

              <Route path="/dominoes">
                <DominoesCard />
              </Route>

              <Route path="/tumbler">
                <TumblerCard />
              </Route>

              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
