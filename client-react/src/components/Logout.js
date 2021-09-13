import React from "react";
import axios from "axios";
import '../task.min.css'


const username = localStorage.getItem('name');

class Logout extends React.Component {

  
  
    render() {
      return (
        <div>
          <h3>Logout {username}</h3>

        </div>
      );
    }
  }
  
  export default Logout;
  