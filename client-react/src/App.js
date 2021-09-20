import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyContextProvider from './MyContent';



//import  Task from "./components/Task";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Inventory from './components/Inventory';
import About from './components/About';
import Products from './components/Products';

function App () {
  return (
    <MyContextProvider>
    <Router>
    <div>
      <nav className="navMenu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/products">Products</Link>
            
            
        <div className="dot"></div>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/inventory">
          <Inventory />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  </Router>
  </MyContextProvider>
  )
};

export default App;

