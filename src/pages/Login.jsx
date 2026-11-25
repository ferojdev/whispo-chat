import React, { useState } from 'react'
import Logimg from '../assets/Log.png'
import Image from '../components/Image'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Vortex } from 'react-loader-spinner'







const Login = () => {

  const navigate = useNavigate()
  const auth = getAuth();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [emailerror, setEmailerror] = useState('')
  let [resetemail,setResetemail] = useState('')
  let [passworderror, setPassworderror] = useState('')
  let [loader, setLoader] = useState(false)
  let [popup, setPopup] = useState(false)

  let handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailerror('')
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPassworderror('')
  }
  let handleSingIn = () => {
    if (!email) {
      setEmailerror('Enter Your Email')
    } else if (!emailRegex.test(email)) {
      setEmailerror('Enter A valid Email')
    } if (!password) {
      setPassworderror('Enter Your Password')
    }
    if (email && emailRegex.test(email) && password) {
      setLoader(true)

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified) {

            toast('Login Successfully')

            setTimeout(() => {
              navigate('/home')
            }, 2000)
          } else {
            toast.error('Chek Your Email For Verify')
          }

          setLoader(false)

        })
        .catch((error) => {

          setLoader(false)
          const errorCode = error.code;
          if (errorCode.includes('auth/invalid-credential')) {
            toast('Invalid Creadential')
          }
          console.log(errorCode)
        });
    }
  }


  let handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast('Login Successfully')
        navigate('/home')
      }).catch((error) => {

      });


  }

  let handlesubmit = () => {
sendPasswordResetEmail(auth, resetemail)
  .then(() => {
    toast.success('Check your Email for reset Password')
  })
  setPopup(false)
  .catch((error) => {
    
  });

  }


  return (
    <Grid container >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid size={6}>
        <div className='flex justify-end items-center h-full'>
          <div className='w-[560px]'>
            <h2 className='text-[34px] font-bold text-[#11175D]' >Login to your account!</h2>
            <div onClick={handleGoogle} className='flex justify-center items-center font-semibold mt-5! border border-gray-300 gap-x-3 w-[40%]! py-3 rounded cursor-pointer' >
              <FcGoogle />
              <p className='text-sm text-[#03014C]  ' >Login with Google</p>
            </div>
            <TextField onChange={handleEmail} className='w-[70%] mt-10!' id="outlined-basic" label="Email" variant="outlined" />
            {emailerror && <p className='w-[70%] bg-red-600 py-2 mt-2 rounded text-white px-3' >{emailerror}</p>}

            <TextField onChange={handlePassword} className='w-[70%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
            {passworderror && <p className='w-[70%] bg-red-600 py-2 mt-2 rounded text-white px-3' >{passworderror}</p>}


            <p onClick={() => setPopup(!false)} className='ml-[130px] mt-3 cursor-pointer' >Forget Password</p>
            {popup && <div  className='absolute w-full h-screen bg-black/50 top-0 left-0 z-10 flex justify-center items-center'>
              <div className='w-[600px] h-[400px] bg-white rounded flex flex-col gap-y-3 justify-center items-center'>
                <h2 className='text-lg font-bold' >Forget Password</h2>
                <h2 className='text-base font-medium' >Send your Email for reset your Password</h2>
                <TextField onChange={(e)=>setResetemail(e.target.value)} className='w-[60%] ' id="outlined-basic" label="Email" variant="outlined" />
                <div className='flex' >
                  <Button onClick={() => setPopup(false)} className='bg-[#5F34F5]! rounded! ' variant="contained"> Cancel</Button>
                  <Button onClick={handlesubmit} className='bg-[#5F34F5]! rounded! ml-3! ' variant="contained"> Submit</Button>
                </div>
              </div></div>}

            {
              loader
                ?
                <Vortex
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  wrapperClass="vortex-wrapper"
                  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
                : <Button onClick={handleSingIn} className='bg-[#5F34F5]! w-[70%]! py-3! mt-10! mb-5! rounded! ' variant="contained"> Login to Continue</Button>
            }
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