import React, {useContext, useState} from "react";
import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';


const user = JSON.parse(localStorage.getItem('user'));
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



// function Profile(){

// const {rootState,logoutUser} = useContext(MyContext);
// const {showLogin,isAuth,theUser} = rootState;

// // If user Logged in
// if(isAuth)
// {
//     return(
//         <div className="userInfo">
//             <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
//             <h1>{theUser.name}</h1>
//             <div className="_email"><span>{theUser.email}</span></div>
//             <button onClick={logoutUser}>Logout</button>
//         </div>
//     )
// }
// // Showing Login Or Register Page According to the condition
// else if(showLogin){
//     return <Login/>;
// }
// else{
//     return <Signup/>;
// }


// }
// export default Profile;
