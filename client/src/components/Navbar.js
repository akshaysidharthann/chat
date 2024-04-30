import React from 'react'
import {Box,Typography} from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'


const Navbar = () => {
  const navigate = useNavigate();
const loggedIn = JSON.parse(localStorage.getItem('authToken'));
//handle logout
const handleLogout = async() => {
  try{
await axios.post('/api/v1/auth/logout')
toast.success("logout successfully");
navigate('/login')
  }catch (error){
    console.log(error);
  }

};
  return (
    <div>
        <Box width={'100%'} p='1rem 6%' textAlign={'center'} sx={{boxShadow:3, mb:2, bgcolor:'purple' ,color:'white'}}>
        <Typography varient="h1" color={"white"} fontWeight="bold" >AI GPT3

        </Typography>
        {
          
          loggedIn ?  ( <> <NavLink to='/' p={1}>Home</NavLink><NavLink to='/login' onClick={handleLogout} p={1}>Logout </NavLink> </>):
          ( <> <NavLink to="/register" p={1} >Sign Up</NavLink>  
           <NavLink to='/login' p={1}>Sign In</NavLink> </>)

          
        };
       
      
        </Box>
    </div>
  )
}

export default Navbar