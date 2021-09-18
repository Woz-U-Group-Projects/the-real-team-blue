import React, {useContext, useState} from "react";
import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';


const user = JSON.parse(localStorage.getItem('user'));
const employee = JSON.parse(localStorage.getItem('employee'));



function Profile() {
const {logoutUser, inventory} = useContext(MyContext);
  

return (
      <div>
        <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
        <h1>Hello {employee.FirstName} {employee.LastName}</h1>
        <h3>Username: {user.Username}</h3>
        <h3>Email: {user.Email}</h3>
        <button onClick={logoutUser}>Logout</button>
        <button onClick={inventory}>Go to Inventory</button>
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
