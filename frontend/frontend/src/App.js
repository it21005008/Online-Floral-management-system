import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import DeliveryMan_Registration from './components/del_manage/DeliveryMan_Registration';
import DeliveryMan_Details from './components/del_manage/DeliveryMan_Details';
import Edit_DeliveryMan from './components/del_manage/Edit_DeliveryMan';

import AddOrder from './components/del_manage/AddOrder';
import Order_Details from './components/del_manage/Order_Details';
import Edit_OrderDetails from './components/del_manage/Edit_OrderDetails';

import Footer from './components/Footer';
import NavBar from './components/NavBar';


class App extends Component{
  render(){
    return(
      <Router>
        <NavBar/> {/* Create navbar */}
        <div style = {{backgroundColor:'#e0f6fc',  margin:"0"}}>
        
          
          <Route path="/DeliveryMan_Registration" exact component={DeliveryMan_Registration}></Route>
          <Route path="/DeliveryMan_Details" exact component={DeliveryMan_Details}></Route>
          <Route path="/Edit_DeliveryMan/:id" exact component={Edit_DeliveryMan}></Route>
          
          <Route path="/AddOrder" exact component={AddOrder}></Route>
          <Route path="/Order_Details" exact component={Order_Details}></Route>
          <Route path="/Edit_OrderDetails/:id" exact component={Edit_OrderDetails}></Route>
         

          <div style={{paddingTop:'0px',width:'100%'}}>
          {/* Create footer */}
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
