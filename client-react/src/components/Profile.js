import React, {useContext} from "react";
// import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';


// const user = JSON.parse(localStorage.getItem('user'));
const employee = JSON.parse(localStorage.getItem('employee'));



function Profile() {
const {logoutUser} = useContext(MyContext);
  
const routeChange = () =>{ 
  window.location.pathname='/inventory';
}
return (
      <div className="_profile">
        <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
        <h1>Hello {employee.FirstName} {employee.LastName}</h1>
        <h3>Username: {employee.Username}</h3>
        <h3>Employee ID: {employee.EmployeeID}</h3>
        <h3>Email: {employee.Email}</h3>
        <div><button onClick={logoutUser}>Logout</button></div>
        <button onClick={routeChange}>Go to Inventory</button>
      </div>
    );
  
}


export default Profile;


