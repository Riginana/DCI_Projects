import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import LinkUrl from "./Components/LinkUrl";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./images/logoipsum-logo-15.svg";

function App() {
  return (
    <Router>
      <div className="App-header">
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
