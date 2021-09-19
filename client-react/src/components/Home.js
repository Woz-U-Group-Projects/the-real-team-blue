import React from "react";
import axios from "axios";
import '../task.min.css'


class Home extends React.Component {
  
 routeLogin = () =>{ 
    window.location.pathname='/login';
  }

  routeSignup = () =>{ 
    window.location.pathname='/signup';
  }

  routeAbout = () =>{ 
    window.location.pathname='/about';
  }
    render() {
      return (
        <div className="_home">
           <div class="card">
            <div class="firstBx">
            <h1>
              <div>A</div> 
              <div>B</div> 
              <div>COMPUTERS</div>
              </h1>
            </div>
            <div class="details">
            <div><button onClick={this.routeAbout}>About</button></div>
            <div><button onClick={this.routeLogin}>Login</button></div>
            <div><button onClick={this.routeSignup}>Signup</button></div>
            
            </div>
        </div>
          {/* <h1>A B Computer</h1>
          <div className="form-control"></div> */}
        </div>
      );
    }
  }
  
  export default Home;
  