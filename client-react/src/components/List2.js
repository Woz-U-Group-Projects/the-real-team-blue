import React from "react";
import axios from "axios";
import '../task.min.css'
  
//**Product List Accessible to Everyone**//

class List2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventory: [] };
  }

  componentDidMount() {
    this.getData();
  }

   componentDidUpdate(){
   console.log(this.state);
 }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      //redirectToReferrer: true
    })
  }

  getData = () => {
    let url = "http://localhost:3001/inventory";
    axios.get(url).then(response => this.setState({ inventory: response.data }));
  };

  // deleteData = (e) => {
  //   fetch
  //   this.setState({inventory: this.state.inventory.filter(function(product) { 
  //     return product !== e.target.value 
  // })});
  // }

  render() {
    return (
      <div>
        <ul>
          {this.state.inventory.map(p => (
            <li key={ p.ProductID }>
            
             <div>Product ID: {p.ProductID } </div>
             <div>Product Description: { p.ProductDesc } </div> 
             <div>Product Qty: { p.ProductQty } </div>
             <div>Product Price: { p.ProductPrice } </div>
             <div>Created On: { p.createdAt } </div>
             <div>Updated On: { p.updatedAt} </div> 
            </li>
          ))}
          
        </ul>
      </div>
    );
  }
}

export default List2;
