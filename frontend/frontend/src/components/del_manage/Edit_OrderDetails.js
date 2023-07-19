import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class Edit_OrderDetails extends Component{

// Make changes to the post
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
    const id = this.props.match.params.id;

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
    /// Validation 

    const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(CustomerName.length === 0  || Address.length === 0 || MobileNumber.length === 0 || newDate.length === 0 || del_Date.length === 0 ||Remark.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else if(CustomerName.length < 4 ){
      swal("Invalid Customer Name !", "Length shuld be greater than 4 !", "error");
    }else if(Address.length <8 ){
      swal("Invalid Address !", "Length shuld be greater than 4 !", "error");
    }else if(MobileNumber.length < 10 ){
        swal("Invalid Address !", "Length shuld be greater than 4 !", "error");
    }
    else{

      axios.put(`/Order_Details/update/${id}`,data).then((res) =>{
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
    swal({
      title: "Done!",
      text: "Update Successful",
      icon: "success",
      button: "Okay!"
  })
  .then((value) => {
      window.location = '/Order_Details'; // 
  });}
  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/Order_Details/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
          CustomerName:res.data.post.CustomerName,
          Address:res.data.post.Address,
          MobileNumber:res.data.post.MobileNumber,
          newDate:res.data.post.newDate,
          del_Date:res.data.post.del_Date,
          Remark:res.data.post.Remark

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (
    <div>
      <div className style={{ backgroundColor:'#F1F1F1', backgroundSize: 'cover'}}> <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Edit Order Details </font> </h1> 
          <br/>
          <form className="needs-validation" noValidate style={{backgroundColor: "#e0f6fc", 
          }}>
          <br/><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Customer Name :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Name"
              placeholder="Enter  Name"
              value={this.state.CustomerName}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Address :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Address"
              placeholder="Enter Address"
              value={this.state.Address}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Mobile Number</strong>*</label>
              <input type="text"
              className="form-control"
              name="MobileNumber"
              placeholder="Enter Mobile Number"
              value={this.state.MobileNumber}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>


            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Date :</strong>*</label>
              <input type="text"
              className="form-control"
              name="newDate"
              placeholder="Date"
              value={this.state.newDate}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>del_Date :</strong>*</label>
              <input type="text"
              className="form-control"
              name="del_Date"
              placeholder="Date"
              value={this.state.del_Date}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            <div className="form-group" style={{marginLeft:"100px", marginRight:"100px"}}>
              <label style={{marginBottom:'5px'}} ><strong>Remark :</strong>*</label>
              <input type="text"
              className="form-control"
              name="Remark"
              placeholder="Remark"
              value={this.state.Remark}
              style={{backgroundColor: "#ffff", marginTop:"10px",}}
              onChange={this.handleInputChange}/>
            </div><br/>

            


            <div className="text-center" > 
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update      
              </button>&nbsp;
            <a href="/"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
            {/* ListRegistration */}
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