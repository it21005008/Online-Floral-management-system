import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Creating a new recipe...

export default class DeliveryMan_Registration extends Component {

  constructor(props){
    super(props);
    this.state={
        Name:"",
        NIC:"",
        Address:"",
        MobileNumber:"",
        Email:"",
        newDate:"",
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

    const {Name,NIC,Address,MobileNumber,Email,newDate,Remark} = this.state;

    const data ={
        Name:Name,
        NIC:NIC,
        Address:Address,
        MobileNumber:MobileNumber,
        Email:Email,
        newDate:newDate,
        Remark:Remark
    }

    console.log(data)

    // Validation 

    const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(Name.length === 0 || NIC.length === 0 || Address.length === 0 || MobileNumber.length === 0 || Email.length === 0  || newDate.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else if(Name.length < 4 ){
      swal("Invalid  Name !", "Length shuld be greater than 4 !", "error");
    }else if(NIC.length < 9 ){
      swal("Invalid NIC Number !", "Length shuld be greater than 9 !", "error");
    }else if(Address.length < 4 ){
      swal("Invalid Address !", "Length shuld be greater than 4 !", "error");
    }else if ((!cuem.test(String(Email)))) {
      swal("Invalid email address !", "Please enter valid email address", "error");
    }else if(Remark.length < 0 ){
      swal("Invalid Remark !", "", "error");
    }
    else{

    axios.post("/DeliveryManRegistration/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            Name:"",
            NIC:"",
            Address:"",
            MobileNumber:"",
            Email:"",
            newDate:"",
            Remark:""
          }
        )
      }
    });
    swal({ text: "Legal Case Type Successfully Added", icon: "success", button: "Okay!"})
  .then((value) => {
      window.location = '/DeliveryMan_Details'; // /ListSupplierRegistration
  });}
  }   

//demo button method
demo =() => { 

  //setState
  this.setState ({
    Name: "Pasindu Shavinda"
  })

  this.setState ({
    NIC: "805284383V"
  })

  this.setState ({
    Address: "Colombo 03"
  })

  this.setState ({
    MobileNumber: "0771231234"
  })

  this.setState ({
    Email: "pasindu@gmail.com"
  })

  this.setState ({
    newDate: "01/01/2021"
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
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Delivery Man Registration </font> </h1> 
          <br/>
          <form className="needs-validation" noValidate style={{backgroundColor: "#e0f6fc", 
          }}>
          <br/><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong> Name :</strong></label>
              <input type="text"
              className="form-control"
              name="Name" 
              placeholder="Enter  Name"
              value={this.state.Name}
              onChange={this.handleInputChange} 
              style={{backgroundColor: "#ffff", marginTop:"10px",}} />
          </div><br/>

          <div class="form-group" style={{marginLeft:"100px", marginRight:"100px"}} >
              <label><strong>NIC :</strong></label>
              <input type="text"
              className="form-control"
              name="NIC" 
              placeholder="Enter NIC Number"
              value={this.state.NIC}
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
              <label><strong>Email :</strong></label>
              <input type="text"
              className="form-control"
              name="Email" 
              placeholder="Enter Email"
              value={this.state.Email}
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
          {/* /ListSupplierRegistration */}<br/><br/>

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


