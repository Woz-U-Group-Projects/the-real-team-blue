import React, { Component } from 'react';
//import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


//import  Task from "./components/Task";
import Signup from './components/Signup';

function App() {
  return (
    <div className="navbar">
        <div className="links"> 
        <a href="/">Main Page</a>
        <a href="/createpost">Create Post</a>
        </div>
      
     
    
      <Signup />
      </div>
  )
};

export default App;
