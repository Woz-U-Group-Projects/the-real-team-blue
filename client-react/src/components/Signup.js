import React from "react";
import axios from "axios";
import '../task.min.css'


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employee: [] };
    this.userName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = "http://localhost:3001/employee";
    axios.get(url).then(response => this.setState({ employee: response.data }));
  };

  addEmployee = () => {
    let url = "http://localhost:3001/employee/signup";
    axios.post(url, { username: this.userName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.userName.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD


  render() {
    return (
      <div>
        <h1>Welcome to A B Computer's Employee Portal! Please sign up</h1>

        <form id="signup" name="signup">
            <div>
                <label for="name">First Name: </label>
                <input type="text" name="firstName" required/>
            </div>
            <div>
                <label for="name">Last Name: </label>
                <input type="text" name="lastName" required/>
            </div>
            <div>
                <label for="name">Email: </label>
                <input type="text" name="email" required/>
            </div>
            <div>
                <label for="name">Username: </label>
                <input type="text" name="username" required/>
            </div>
            <div>
                <label for="name">Password: </label>
                <input type="password" name="password" required/>
            </div>
            <div>
                <label for="name">Admin: </label>
                <select name="admin" id="admin">
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <div>
                <button type="submit" onClick={this.addEmployee}>Submit</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Signup;

