import React, { useState } from 'react';
import {Box,Typography,useMediaQuery,TextField,Button,Alert,Collapse} from '@mui/material'
import { Link,useNavigate } from 'react-router-dom';
import toast  from 'react-hot-toast';
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  //media
  const isNotmobile = useMediaQuery("(min-width:1000px)");
  //states

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")

//register ctrl
const handleSubmit = async (e) => {
  e.preventDefault()
  try{
 await axios.post('/api/v1/auth/login',{email,password})

toast.success('login successfully')
localStorage.setItem('authToken',true);
navigate('/');


  }catch(err){
    console.log(error);
    if(err.response.data.error){
      setError(error.response.data.error)
    }
    else if(err.message){
      setError(err.message);
    }
    setTimeout(() =>{
      setError("");
    },5000);

  }
};



  return (
    <Box width={isNotmobile ? '40%' : '80%' } p={'2rem'} m={'2rem auto'}
    borderRadius={5} sx={{boxShadow:5}}>
      <Collapse in={error}>
        <Alert severity='error' sx={{mb:2}}>
          {error}

        </Alert>
      
      
      </Collapse>
   
    <form onSubmit={handleSubmit}>
      <Typography varient="h3">sign in</Typography> 

      <TextField label='email' type='email' required margin='normal' fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <TextField label='password' type='password' required margin='normal' fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <Button type='submit' fullWidth variant='contained' size='large' sx={{color:'white',mt:2}}>Sign in</Button>
      <Typography mt={2}>
        Don't have an account ? <Link to="/register">please Register</Link>

      </Typography>
    </form>
    </Box>
  );
};

export default Login