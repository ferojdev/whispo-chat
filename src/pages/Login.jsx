import React, { useState } from 'react'
import Logimg from '../assets/Log.png'
import Image from '../components/Image'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Login = () => {


  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [emailerror, setEmailerror] = useState('')
  let [passworderror, setPassworderror] = useState('')


  let handleSingUp = () => {
    if (!email) {
      setEmailerror('Enter Your Email')
    } else if (!emailRegex.test(email)) {
      setEmailerror('Enter A valid Email')
    } if (!password) {
      setPassworderror('Enter Your Password')
    }
    if (email && emailRegex.test(email) && password) {
      alert("Regisretion Success")
    }
  }


  let handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailerror('')
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPassworderror('')
  }




  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <div className='flex justify-end items-center h-full'>
          <div className='w-[560px]'>
            <h2 className='text-[34px] font-bold text-[#11175D]' >Login to your account!</h2>
            <div className='flex justify-center items-center font-semibold mt-5! border border-gray-300 gap-x-3 w-[40%]! py-3 rounded' >
              <FcGoogle />
              <p className='text-sm text-[#03014C]  ' >Login with Google</p>
            </div>
            <TextField onChange={handleEmail} className='w-[70%] mt-10!' id="outlined-basic" label="Email" variant="outlined" />
            {emailerror && <p className='w-[70%] bg-red-600 py-2 mt-2 rounded text-white px-3' >{emailerror}</p>}

            <TextField onChange={handlePassword} className='w-[70%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
            {passworderror && <p className='w-[70%] bg-red-600 py-2 mt-2 rounded text-white px-3' >{passworderror}</p>}

            <Button onClick={handleSingUp} className='bg-[#5F34F5]! w-[70%]! py-3! mt-10! mb-5! rounded! ' variant="contained"> Login to Continue</Button>

            <p className='ml-[70px]' >Don’t have an account ?<span className='text-[#EA6C00] font-bold' > <Link to="/">Sign Up</Link> </span> </p>
          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image className='w-full h-screen object-cover' src={Logimg} />
      </Grid>
    </Grid>
  )
}

export default Login