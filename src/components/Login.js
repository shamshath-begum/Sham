import React, { useState } from 'react'
import { url } from '../App'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { toast } from 'react-toastify';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')

  let navigate=useNavigate()

  let handleClick=async()=>{
    try {
     let res=await axios.post(`${url}/login-user`,{email,password})
     if(res.status===200)
     {
      sessionStorage.setItem('token',res.data.token)
      toast.success(res.data.message)
      navigate('/dashboard')
     }
     console.log(res)
     
    } catch (error) {
      console.log(error)
    }
  }
  return <>
    <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary"onClick={()=>handleClick()}>
        Submit
      </Button>
    </Form>
    </div>
    </>
}

export default Login