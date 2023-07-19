import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Shows details of all recipe...
 class DeliveryMan_Details extends Component{
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}
componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/DeliveryManRegistration").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}

onDelete=(id)=>{
  if (window.confirm('Are you sure?')) {
  axios.delete(`/DeliveryManRegistration/delete/${id}`).then((res)=>{
    alert("Delete Successfully !");
    this.retrievePosts();
  })
}}



filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.Name.includes(searchKey) || post.Name.toLowerCase().includes(searchKey) ||
  post.NIC.includes(searchKey) || post.NIC.toLowerCase().includes(searchKey) ||
  post.MobileNumber.includes(searchKey) || post.MobileNumber.toLowerCase().includes(searchKey))
  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("DeliveryManRegistration").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}

//pdf generating
jsPdfGenerator = () => {

  //new document in jspdf
  var doc = new jsPDF('p','pt');

  doc.text(210,30,"DiliveryMans Details")
  doc.autoTable({  html:'#my-table' })

  doc.autoTable({
    columnStyles: { europe: { halign: 'center' } }, 
    margin: { top: 10 },
  })

  //save the pdf
  doc.save("Delivery Man Details.pdf");
}



render(){
    return (
      
      <div className style={{ backgroundColor: '#F1F1F1', backgroundSize: 'cover'}}> <br/>
      <br/>
      <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Delivery Man Details</font> </h1> <br/>
      
      
      <div className = "row" style={{marginLeft:"50px", marginRight:"63px"}} >
        
            
      <div className = "col-lg-9 mt-2 mb-2" >
        &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success" variant = "primary"> <a href="/DeliveryMan_Registration" style={{textDecoration:'none',color:'white'}}>
          add dilivery Person </a></button>
        
        </div > 
            
          <div className = "col-lg-3 mt-2 mb-2">
          <input className="form-control"
          type="search"
          placeholder="Search Name/Mobile No./Del.Date"
          namr="searchQuery"
          onChange={this.handleSearchArea}>
          </input> &nbsp;&nbsp;&nbsp;</div > </div>


      
      <table class="table table-bordered table-white" style={{border:' 1px #3f7385',marginLeft:'auto',marginRight:'auto',width: '500px',backgroundColor:'#cfe6ee'}} id="my-table" className="table" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>

          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <div href={`/Registration/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.Name}
                  </div>
                  </td>
                  <td>{posts.NIC}</td>
                  <td>{posts.Address}</td>
                  <td>{posts.MobileNumber}</td>
                  <td>{posts.Email}</td>
                  <td>{posts.newDate}</td>
                <td>
                  {/* Edit button */}
                  <a className="btn btn-info" style={{width:'50px',height:'40px' }} href={`/Edit_DeliveryMan/${posts._id}`}>
                    <i className="fas fa-edit"></i>
                  </a>
                  </td>
                  <td>
                  {/* Delet button */}
                  <a className="btn btn-danger" style={{width:'50px',height:'40px' }}  href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="fa fa-trash"></i>
                  </a>
                </td>
              </tr>
            )) }
        </tbody>
      </table>

      <div className = "col-lg-9 mt-2 mb-2" style={{marginLeft:'75%' }}>

        <button onClick={this.jsPdfGenerator} type="button" class="btn btn-primary"> &nbsp;&nbsp;&nbsp;&nbsp;Pdf&nbsp; &nbsp;&nbsp;&nbsp;</button>
        
        </div > 
      
     <br/><br/></div>
    )
  }
}
export default DeliveryMan_Details;
