import React from "react";
// import axios from "axios";
import '../task.min.css'
import List2 from './List2';

function Products () {


//   const routeChange = () =>{ 
//     window.location.pathname='/profile';
//   }

  return(
      <div className="_inventory">
          <div>
            <h3>Services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor massa ut leo suscipit blandit. Nulla rhoncus erat a augue ullamcorper tempor et eget dolor. Nunc eleifend non ante nec suscipit. Nam non leo vel metus pretium commodo. Suspendisse eu metus ac nulla rhoncus placerat vel venenatis orci. Sed consectetur nisi eget mauris porttitor euismod. Aliquam at commodo nisi.</p>
            <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                    Aliquam viverra ligula eget mauris dapibus semper.
                </li>
                <li>
                 Quisque consectetur justo sed dui eleifend ultrices sed vel quam.
                </li>
            </ul>
            <h3>Products</h3>
                <List2 />
          </div>
      </div>
  );
}



export default Products

