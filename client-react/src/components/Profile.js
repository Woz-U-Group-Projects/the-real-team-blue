import React from "react";
import axios from "axios";
import '../task.min.css'


let url = "http://localhost:3001/employee";

class Profile extends React.Component {

  
  render() {
    return (
      <div>
        <h1>Hello {this.props.FirstName} {this.props.LastName}</h1>
      </div>
    );
  }
}


export default Profile;
