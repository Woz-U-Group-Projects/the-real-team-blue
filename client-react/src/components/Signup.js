import React, {useContext, useState} from "react";
import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';

/*let url = "http://localhost:3001/employee";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      employee: [],
      Username: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      Admin: 0
   };
    this.userName = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

 // componentDidUpdate(){
 //   console.log(this.state);
 // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  getData = () => {
    axios.get(url).then(response => this.setState({ employee: response.data }));
  };

  addEmployee = (e) => {
   // e.preventDefault();
    axios.post(`${url}/signup`, { 
      username: this.state.Username,
      firstName: this.state.FirstName,
      lastName: this.state.LastName,
      email: this.state.Email,
      password: this.state.Password,
      admin: this.state.Admin
    })
    .then(response => {
      window.location.href="/#Login";
    
    });
  };

  //create update and delete functions to complete CRUD


  render() {
    return (
      <div>
        <h1>Welcome to A B Computer's Employee Portal! Please sign up</h1>

        <form id="signup" name="signup" onSubmit={this.addEmployee}>
            <div>
                <label htmlFor="name">First Name: </label>
                <input type="text" name="FirstName" onChange={this.handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Last Name: </label>
                <input type="text" name="LastName" onChange={this.handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Email: </label>
                <input type="text" name="Email" onChange={this.handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Username: </label>
                <input type="text" name="Username" onChange={this.handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Password: </label>
                <input type="password" name="Password" onChange={this.handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Admin: </label>
                <select name="Admin" id="admin" onChange={this.handleChange}>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <div>
                <button type="submit"> Submit</button>
            </div>
        </form>
        <ul>
          {this.state.employee.map(e => (
            <li key={e.EmployeeID}>{e.Email}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Signup;*/


function Register(){
  const {toggleNav,signupUser} = useContext(MyContext);
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

  // On Submit the Registration Form
  const submitForm = async (event) => {
      event.preventDefault();
      const data = await signupUser(state.userInfo);
      if(data.success){
          setState({
              ...initialState,
              successMsg:data.message,
          });
      }
      else{
          setState({
              ...state,
              successMsg:'',
              errorMsg:data.message
          });
      }
  }

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
                  <input name="FirstName" required type="text" value={state.userInfo.FirstName} onChange={onChangeValue} />
              </div>
              <div className="form-control">
                  <label>Last Name</label>
                  <input name="LastName" required type="text" value={state.userInfo.LastName} onChange={onChangeValue} />
              </div>
              <div className="form-control">
                  <label>Username</label>
                  <input name="Username" required type="text" value={state.userInfo.Username} onChange={onChangeValue} />
              </div>
              <div className="form-control">
                  <label>Email</label>
                  <input name="Email" required type="email" value={state.userInfo.Email} onChange={onChangeValue} />
              </div>
              <div className="form-control">
                  <label>Password</label>
                  <input name="Password" required type="password" value={state.userInfo.Password} onChange={onChangeValue} />
              </div>
              {errorMsg}
              {successMsg}
              <div className="form-control">
                  <button type="submit">Sign Up</button>
              </div>
          </form>
          <div className="_navBtn">
              <button  onClick={toggleNav}>Login</button>
          </div>
      </div>
  );
}

export default Register