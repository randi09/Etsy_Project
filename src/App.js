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

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h1>RLR Designs</h1>
        <Router>
          <div>
            <nav>
              <Link to="/"> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/cart"> Cart </Link>
            </nav>
          </div>
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
        </Router>
      </div>
    </div>
  );
}

export default App;
