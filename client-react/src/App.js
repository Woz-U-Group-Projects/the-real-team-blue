import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


//import  Task from "./components/Task";
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';

function App () {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </div>
  </Router>
    
  )
};




export default App;

/*<div className="navbar">
      <div className="links"> 
        <a href="/Home">Main Page</a>
        <a href="/Signup">Sign Up</a>
        <a href="/Login">Login</a>
      </div>
      <div><Home /></div>
      <div><Signup /></div>
      <div><Login /></div>
      <div><Profile FirstName={this.state.employee.FirstName}/></div>
      
      
    </div>*/