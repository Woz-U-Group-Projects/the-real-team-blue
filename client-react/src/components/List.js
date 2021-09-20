import React from "react";
import axios from "axios";
import '../task.min.css'

//**Product List Accessible to Employees Only**//

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventory: [] };
    this.productId = React.createRef;
  }

  componentDidMount() {
    this.getData();
  }

   componentDidUpdate(){
   console.log(this.state);
 }
  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //     //redirectToReferrer: true
  //   })
  // }

  getData = () => {
    let url = "http://localhost:3001/inventory";
    axios.get(url).then(response => this.setState({ inventory: response.data }));
  };

//   deleteData = () => {
//   let url = "http://localhost:3001/inventory/" + this.state.inventory.ProductID ;
//   axios.delete(url, { productID: this.productId.current.value }).then(response => {
//     // refresh the data
//     this.getData();
  
//   });
// };


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
             <button onClick={this.deleteData} type="button" className="btn btn-danger">Delete</button> 
            </li>
          ))}
          
        </ul>
      </div>
    );
  }
}

export default List;
