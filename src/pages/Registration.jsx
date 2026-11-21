import React, { useState } from 'react'
import Regimg from '../assets/Reg.png'
import Image from '../components/Image'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Registration = () => {


  let [email,setEmail]=useState('')
  let [name,setName]=useState('')
  let [password,setPassword]=useState('')
  let [emailerror,setEmailerror]=useState('')
  let [nameerror,setNameerror]=useState('')
  let [passworderror,setPassworderror]=useState('')


  let handleSingUp=()=>{
    if(!email){
      setEmailerror('Enter Your Email')
    }else if(!emailRegex.test(email)){
      setEmailerror('Enter A valid Email')
    }if(!name){
      setNameerror('Enter Your Name')
    }if(!password){
      setPassworderror('Enter Your Password')
    }
    if(email && emailRegex.test(email) && name && password){
      alert("Regisretion Success")
    }
  }


  let handleEmail=(e)=>{
setEmail(e.target.value)
setEmailerror('')
  }
  let handleName=(e)=>{
  setName(e.target.value)
  setNameerror('')
  }
  let handlePassword=(e)=>{
  setPassword(e.target.value)
  setPassworderror('')
  }


  

  return (
     <Grid container spacing={2}>
        <Grid size={6}>
<div className='flex justify-end items-center h-full'>
    <div className='w-[560px]'>
        <h2 className='text-[34px] font-bold text-[#11175D]' >Get started with easily register</h2>
        <p className='text-lg text-black/50' >Free register and you can enjoy it</p>
        
        <TextField onChange={handleEmail}  className='w-[70%] mt-10!' id="outlined-basic" label="Email" variant="outlined" />
{emailerror &&         <p className='w-[70%] bg-red-600 py-2 mt-2 rounded text-white px-3' >{emailerror}</p>}
        <TextField onChange={handleName} className='w-[70%] mt-5!' id="outlined-basic" label="Full Name" variant="outlined" />
{nameerror &&         <p className='w-[70%] bg-red-600 py-2 mt-2 rounded text-white px-3' >{nameerror}</p>}
        
        <TextField onChange={handlePassword} className='w-[70%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
{passworderror &&         <p className='w-[70%] bg-red-600 py-2 mt-2 rounded text-white px-3' >{passworderror}</p>}

      <Button onClick={handleSingUp} className='bg-[#5F35F5]! w-[70%]! py-3! mt-10! mb-5! rounded-full! ' variant="contained"> Sign Up</Button>

        <p className='ml-[70px]' >Already  have an account ? <span className='text-[#EA6C00] font-bold' > <Link to="/login">Sign Up</Link>  </span> </p>
    </div>
</div>
        </Grid>
        <Grid size={6}>
<Image className='w-full h-screen object-cover' src={Regimg} />
        </Grid>
      </Grid>
  )
}

export default Registration