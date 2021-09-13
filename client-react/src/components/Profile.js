import React, {useContext, useState} from "react";
import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';
import Login from './Login';
import Signup from './Signup';

// const user = JSON.parse(localStorage.getItem('user'));



// class Profile extends React.Component {

  
//   render() {
//     return (
//       <div>
//         <h1>Hello {user.Username} {user.LastName}</h1>
//       </div>
//     );
//   }
// }


// export default Profile;



function Profile(){

const {rootState,logoutUser} = useContext(MyContext);
const {showLogin,isAuth,theUser} = rootState;

// If user Logged in
if(isAuth)
{
    return(
        <div className="userInfo">
            <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
            <h1>{theUser.name}</h1>
            <div className="_email"><span>{theUser.email}</span></div>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}
// Showing Login Or Register Page According to the condition
else if(showLogin){
    return <Login/>;
}
else{
    return <Signup/>;
}


}
export default Profile;
