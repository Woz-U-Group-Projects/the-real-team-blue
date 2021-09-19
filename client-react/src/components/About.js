import React from "react";
import axios from "axios";
import '../task.min.css'


class About extends React.Component {
  
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
        <div className="_about">
          <h1>About</h1>
          <div className="detail">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis ex. Vestibulum cursus hendrerit urna, eu convallis erat ornare et. Sed eleifend consectetur dui, a fermentum massa venenatis et. Quisque placerat nulla sit amet dolor sagittis ultrices. Fusce efficitur vehicula nulla non ultricies. Morbi vulputate sollicitudin tincidunt. Morbi ex ante, accumsan sit amet massa sed, pharetra ullamcorper lectus. In varius, arcu vulputate fermentum ultrices, felis quam rhoncus mi, eget fringilla dolor erat ac arcu.</p>

          <p>Pellentesque cursus felis quis risus porttitor efficitur. Sed suscipit eget quam id maximus. Sed at mauris eleifend, tempus lacus quis, finibus arcu. Mauris sit amet luctus quam. Donec a orci quam. Aliquam accumsan ligula dapibus dui gravida ultricies. Aliquam erat volutpat. Integer vitae faucibus ipsum.</p>

          </div>

        </div>
      );
    }
  }
  
  export default About;
  