import React from "react";
import axios from "axios";
import '../task.min.css'

let url = "http://localhost:3001/employee";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      employee: [],
      Username: '',
      Password: ''
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

  loginEmployee = (e) => {
    //e.preventDefault();
    axios.post(`${url}/login`, { 
      username: this.state.Username,
      password: this.state.Password,
    })
    .then(response => {
    //window.location.href="/#Profile";
    });
  };

  //create update and delete functions to complete CRUD


  
  render() {
    return (
      <div>
        <h1>Welcome to A B Computer's Employee Portal! Please Log In</h1>

        <form id="login" name="login" onSubmit={this.loginEmployee}>
            <div>
                <label htmlFor="name">Username: </label>
                <input type="text" name="Username" onChange={this.handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Password: </label>
                <input type="password" name="Password" onChange={this.handleChange} required/>
            </div>
            <div>
                <button type="submit"> Submit</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Login;