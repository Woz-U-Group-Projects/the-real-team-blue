import React, {useContext, useState} from "react";
// import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';


function Register(){
  const {signupUser} = useContext(MyContext);
  const initialState = {
      userInfo:{
        Username: '',
        FirstName: '',
        LastName: '',
        Email: '',
       Password: '',
        Admin: 0
      },
      errorMsg:'',
      successMsg:'',
  }
  const [state,setState] = useState(initialState);

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
      setState({
          ...state,
          userInfo:{
              ...state.userInfo,
              [e.target.name]:e.target.value
          }
      });
  }

  // On Submit the Registration Form
  const submitForm = async (e) => {
      e.preventDefault();
      const data = await signupUser(state.userInfo);
      if(data === 'User successfully created'){
          setState({
              ...initialState,
              // successMsg:data.message,
          });
          window.location.pathname="/login";
      }
      else{
          // setState({
          //     ...state,
          //     successMsg:'',
          //     errorMsg:data.message
          // });
      }
  }


  
  // Show Message on Success or Error
  let successMsg = '';
  let errorMsg = '';
  if(state.errorMsg){
      errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if(state.successMsg){
      successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  return(
      <div className="_loginRegister">
          <h1>Sign Up</h1>
          <form onSubmit={submitForm} noValidate>
              <div className="form-control">
                  <label>First Name</label>
                  <input name="FirstName" required type="text" value={state.userInfo.FirstName} onChange={onChangeValue}/>
              </div>
              <div className="form-control">
                  <label>Last Name</label>
                  <input name="LastName" required type="text" value={state.userInfo.LastName} onChange={onChangeValue}/>
              </div>
              <div className="form-control">
                  <label>Username</label>
                  <input name="Username" required type="text" value={state.userInfo.Username} onChange={onChangeValue}/>
              </div>
              <div className="form-control">
                  <label>Email</label>
                  <input name="Email" required type="email" value={state.userInfo.Email} onChange={onChangeValue}/>
              </div>
              <div className="form-control">
                  <label>Password</label>
                  <input name="Password" required type="password" value={state.userInfo.Password} onChange={onChangeValue}/>
              </div>
              {errorMsg}
              {successMsg}
              <div>By signing up you agree to the ridiculously long terms that you didn't bother to read</div>
              <div>
                  <button type="submit">Sign Up</button>
              </div>

          </form>
      </div>
  );
}

export default Register