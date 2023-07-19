import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Creating a new recipe...

export default class AddOrder extends Component {

  constructor(props){
    super(props);
    this.state={
        CustomerName:"",
        Address:"",
        MobileNumber:"",
        newDate:"",
        del_Date:"",
        Remark:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {CustomerName,Address,MobileNumber,newDate,del_Date,Remark} = this.state;

    const data ={
        CustomerName:CustomerName,
        Address:Address,
        MobileNumber:MobileNumber,
        newDate:newDate,
        del_Date:del_Date,
        Remark:Remark
    }

    console.log(data)

    // Validation 

    const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(CustomerName.length === 0  || Address.length === 0 || MobileNumber.length === 0 || newDate.length === 0 || del_Date.length === 0 ||Remark.length === 0 ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else if(CustomerName.length < 4 ){
      swal("Invalid Customer Name !", "Length shuld be greater than 4 !", "error");
    }else if(Address.length <8 ){
      swal("Invalid Address !", "Length shuld be greater than 4 !", "error");
    }else if(MobileNumber.length < 10 ){
        swal("Invalid Address !", "Length shuld be greater than 4 !", "error");
    }
    else{

    axios.post("/Order_Details/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            CustomerName:"",
            Address:"",
            MobileNumber:"",
            newDate:"",
            del_Date:"",
            Remark:""
          }
        )
      }
    });
    swal({ text: "Legal Case Type Successfully Added", icon: "success", button: "Okay!"})
  .then((value) => {
      window.location = '/Order_Details'; // /ListCustomerRegistration
  });}
  }   

//demo button method
demo =() => { 

  //setState
  this.setState ({
    CustomerName: "sasitha udayantha"
  })

  this.setState ({
    Address: "Colombo 03"
  })

  this.setState ({
    MobileNumber: "0771231234"
  })

  this.setState ({
    newDate: "01/01/2021"
  })

  this.setState ({
    del_Date: "02/01/2021"
  })

  this.setState ({
    Remark: " "
  })

}

  render() {
    return (
    <div>
      
      <div className style={{ backgroundColor:'#F1F1F1', backgroundSize: 'cover'}}> <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Add New Order </font> </h1> 
          <br/>
          <form className="needs-validation" noValidate style={{backgroundColor: "#e0f6fc", 
          }}>
          <br/><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Customer Name :</strong></label>
              <input type="text"
              className="form-control"
              name="CustomerName" 
              placeholder="Enter Customer Name"
              value={this.state.CustomerName}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>


          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Address :</strong></label>
              <input type="text"
              className="form-control"
              name="Address" 
              placeholder="Enter Address"
              value={this.state.Address}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Mobile Number :</strong></label>
              <input type="text"
              className="form-control"
              name="MobileNumber" 
              maxlength = "10"
              placeholder="Enter Mobile Number"
              value={this.state.MobileNumber}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Date :</strong></label>
              <input type="text"
              className="form-control"
              name="newDate" 
              placeholder="Date"
              value={this.state.newDate}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Delivery Date :</strong></label>
              <input type="text"
              className="form-control"
              name="del_Date" 
              placeholder="Date"
              value={this.state.del_Date}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>Remark :</strong></label>
              <input type="text"
              className="form-control"
              name="Remark" 
              placeholder="Remark"
              value={this.state.Remark}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          


          <div className="text-center" > 
          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>&nbsp;
          <a href="/"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
          {/* /ListCustomerRegistration */}<br/><br/>

          <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
          </div>
          <br/>
          
          </form>
          <br/>
          </div>
        </div>
        </div>
    )
   }
}


