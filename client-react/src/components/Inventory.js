import React, {useContext, useState} from "react";
// import axios from "axios";
import '../task.min.css'
import {MyContext} from '../MyContent';
import List from './List';

function Inventory () {
  const {addInventory} = useContext(MyContext);

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
    //   e.preventDefault();
      const data = await addInventory(state.itemInfo);
      if(data === 'Success'){
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


  // Show Message on Success or Error
  let successMsg = '';
  let errorMsg = '';
  if(state.errorMsg){
      errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if(state.successMsg){
      successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  const routeChange = () =>{ 
    window.location.pathname='/profile';
  }

  return(
      <div className="_inventory">
          <button onClick={routeChange}>Go to Back to Profile</button>
          <h1>Inventory</h1>
          <form className="input"  onSubmit={submitForm} noValidate>
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
        <h3>List of Products</h3>
          <List />
          </div>
      </div>
  );
}



export default Inventory

