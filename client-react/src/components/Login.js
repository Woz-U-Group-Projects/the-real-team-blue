import React, {useContext, useState} from "react";
import '../task.min.css'
import {MyContext} from '../MyContent';
// import axios from 'axios'


function Login(){


  const {loginUser} = useContext(MyContext);

  const initialState = {
      userInfo:{
        Username: '',
        Password: '',
      },
      employee: [],
      errorMsg:'',
      successMsg:'',
  }

  const [state,setState] = useState(initialState);

  //***On change input value (email & password)**//
  const onChangeValue = (e) => {
      setState({
          ...state,
          userInfo:{
              ...state.userInfo,
              [e.target.name]:e.target.value
          }
      });
  }


  //***ON SUBMIT LOGIN FORM**//
  const submitForm = async (e) => {
      e.preventDefault();
      const data = await loginUser(state.userInfo);
      // data.success ?  window.location.href="/profile" : console.log("err");
    console.log(data);
if ( data === "Successful"){
//   await isLoggedIn();
  //localStorage.setItem('name', state.userInfo.Username)
  localStorage.setItem('user', JSON.stringify(state.userInfo));
  
  //***GET EMPLOYEE DATA***//
  const username = state.userInfo.Username;  
  const url = 'http://localhost:3001/employee/' + username;
//   axios.get(url, {username} ).then(response => { 
//     console.log(response)
//     localStorage.setItem('employee', JSON.stringify(response.data)); 
//     });

    const info = await fetch(url);
    const response = await info.json();
    console.log(response)
    localStorage.setItem('employee', JSON.stringify(response[0])); 
  
    window.location.pathname="/profile";

    }
    else {

        window.location.pathname="/signup";
    }

}

  // Show Message on Error or Success
  let successMsg = '';
  let errorMsg = '';
  if(state.errorMsg){
      errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if(state.successMsg){
      successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  const routeChange = () =>{ 
    window.location.pathname='/signup';
  }

  return(
  <div>
      <div className="_loginRegister">
          <h1>Login</h1>
          <form  onSubmit={submitForm} noValidate>
              <div className="form-control">
                  <label>Username</label>
                  <input name="Username" type="text" value={state.userInfo.Username} onChange={onChangeValue} required/>
              </div>
              <div className="form-control">
                  <label>Password</label>
                  <input name="Password" type="password" value={state.userInfo.Password} onChange={onChangeValue} required/>
              </div>
              {errorMsg}
              {successMsg}
              <div>
                  <button type="submit">Login</button>
              </div>
          </form>
          <button onClick={routeChange}>Sign Up</button>
      </div>
      </div>
  
  );
  
}

export default Login;


