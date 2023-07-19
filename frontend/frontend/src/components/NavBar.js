import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from 'react-router-dom';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const NavBar = () => {
    const [value, setValue] =useState(  ); 
  return (
    <div>
        <AppBar sx={{backgroundColor:"#293446", width:"auto", ml:"auto"}} position='sticky'>

          <Toolbar>
            <div className="text-secondary">
               
             <img src="2.jpeg" style={{width:'200px' }}/>
            </div> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="nav-link" aria-current="page" href="/"><div class="text-secondary">Home</div></a>
            <a className="nav-link" aria-current="page" href="/DeliveryMan_Details"><div class="text-secondary">Delivery Man Details</div></a>
            <a className="nav-link" aria-current="page" href="/Order_Details"><div class="text-secondary">Order Details</div></a>
            
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar