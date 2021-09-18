import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';

function Inventory () {
  const {addInventory, listInventory} = useContext(MyContext);

  const initialState = {
      itemInfo:{
        ProductID: '',
        ProductName: '',
        ProductDesc: '',
        ProductQty:'',
        ProductPrice: '',   
      },
      inventory: [],
      errorMsg:'',
      successMsg:'',
  }
  const [state,setState] = useState(initialState);



    // On change the Input Value
    const onChangeValue = (e) => {
      setState({
          ...state,
          itemInfo:{
              ...state.itemInfo,
              [e.target.name]:e.target.value
          }
      });
  }

  // On Submit the Registration Form
  const submitForm = async (e) => {
      e.preventDefault();
      const data = await addInventory(state.itemInfo);
      if(data == 'Success'){
          setState({
              ...initialState,
              // successMsg:data.message,
          });
          //window.location.pathname="/login";
      }
      else{
          // setState({
          //     ...state,
          //     successMsg:'',
          //     errorMsg:data.message
          // });
      }
  }

  //const data =[{listInventory}];
  //const data = fetch('http://localhost:3001/inventory').then(response => response.json());
  //console.log(data)
  //const listItems = data.map((d) => <li key={d.name}>{d.ProductName}</li>);
  //const listItems = data.promiser.map((d) => <li key={d.id}> {d.productname}</li>);
 
  useEffect(()=> {
    info();
  }, []);

  const info = async () => { 
    const response = await fetch('http://localhost:3001/inventory')
    //const data = await response.json()
    //setState({inventory: response.data});
    // setState({
    //   ...state,
    //   inventory:
    //   state.inventory = JSON.stringify(data)
      
    // })
  
   //console.log(JSON.stringify(data))
 
    return JSON.stringify(response)
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
      <div className="_inventory">
          <h1>Inventory</h1>
          <form onSubmit={submitForm} noValidate>
              <div>
                  <label>Product ID:</label>
                  <input name="ProductID" required type="text" value={state.itemInfo.ProductID} onChange={onChangeValue} />
              </div>
              <div>
                  <label>Product Name:</label>
                  <input name="ProductName" required type="text" value={state.itemInfo.ProductName} onChange={onChangeValue} />
              </div>
              <div>
                  <label>Product Description:</label>
                  <input name="ProductDesc" required type="text" value={state.itemInfo.ProductDesc} onChange={onChangeValue} />
              </div>
              <div>
                  <label>Product Quantity:</label>
                  <input name="ProductQty" required type="text" value={state.itemInfo.ProductQty} onChange={onChangeValue} />
              </div>
              <div>
                  <label>Product Price</label>
                  <input name="ProductPrice" required type="text" value={state.itemInfo.ProductPrice} onChange={onChangeValue} />
              </div>
              {errorMsg}
              {successMsg}
              <div>
                  <button type="submit">Add</button>
              </div>

          </form>
          <div>
            {/* {listItems } */}
          {/* <List inventory={inventory} /> */}
         <ul>
         {info.map(p => (
            <li key={p.ProductID}>
              <div>Product ID: {p.ProductID} </div>
              <div>Product Description: { p.ProductDesc} </div>
              {/* <div>Product Qty: { state.inventory.ProductQty } </div>
              <div>Product Price: { state.inventory.ProductPrice } </div>
              <div>Created On: { state.inventory.createdAt } </div>
              <div>Updated On: {state.inventory.updatedAt} </div> */}
            </li>
          ))}
        </ul>
          </div>
      </div>
  );
}

export default Inventory

// class Inventory extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       inventory: [], 
//       ProductID:'',
//       ProductName: '',
//       ProductDesc: '',
//       ProductQty: '',
//       ProductPrice: '',
//     };

//   }

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {
//     let url = "http://localhost:3001/inventory";
//     axios.get(url).then(response => this.setState({ inventory: response.data }));
//   };

//     handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//       //redirectToReferrer: true
//     })
//   }

//   addProduct = (e) => {
//     let url = "http://localhost:3001/inventory/addinventory";
//     axios.post(url, { 
//       ProductID: this.state.ProductID,
//       ProductName: this.state.ProductName,
//       ProductDesc: this.state.ProductDesc,
//       ProductQty: this.state.ProductQty,
//       ProductPrice: this.state.ProductPrice,

//     }).then(response => {
//       // refresh the data
//       this.getData();
//       // empty the input
//       //this.productName.current.value = "";
//     });
//   };

//   //create update and delete functions to complete CRUD


//   render() {
//     return (
//       <div>
//         <h3>Inventory</h3>
//         <input ref={this.productName} />
//         <div>
//           <label htmlFor="name">Product ID: </label>
//           <input type="text" name="ProductID" onChange={this.handleChange} required/>
//         </div>
//         <div>
//           <label htmlFor="name">Product Name: </label>
//           <input type="text" name="ProductName" onChange={this.handleChange} required/>
//         </div>
//         <div>
//           <label htmlFor="name">Product Description: </label>
//           <input type="text" name="ProductDesc" onChange={this.handleChange} required/>
//         </div>
//         <div>
//           <label htmlFor="name">Product Quantity: </label>
//           <input type="text" name="ProductQty" onChange={this.handleChange} required/>
//         </div>
//         <div>
//           <label htmlFor="name">Product Price: </label>
//           <input type="text" name="ProductPrice" onChange={this.handleChange} required/>
//         </div>

//         <button type="button" className="btn btn-primary" onClick={this.addProduct}>add</button>
//         <ul>
//           {this.state.inventory.map(p => (
//             <li key={p.taskid}>
//               <div>Product ID: {p.ProductID} </div>
//               <div>Product Description: { p.ProductDesc} </div>
//               <div>Product Qty: { p.ProductQty } </div>
//               <div>Product Price: { p.ProductPrice } </div>
//               <div>Created On: { p.createdAt } </div>
//               <div>Updated On: { p.updatedAt} </div>
//               <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Inventory;
