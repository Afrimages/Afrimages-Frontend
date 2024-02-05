"use client";
import { signIn } from '@/request';
import Image from 'next/image'
import React, { useState } from 'react'
import { RiGoogleFill } from 'react-icons/ri'

const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const submitForm = (e)=>{
        e.preventDefault()
        let data = {email, password};
        console.log(data)
        signIn(data)
    }

  return (
    <div style={{background: `url(./auth-bg.png)`}} className=' w-full min-h-[100vh] flex items-center justify-center'>
        <div className="container px-24 md:px-xPadding pt-5 pb-16 shadow-2xl md:shadow-none w-2/5 min-h-[80vh] bg-white md:bg-transparent rounded-3xl flex  flex-col md:w-full md:h-full">

            <div className='flex flex-col items-center'>
            <a href="/" className='w-full flex justify-center'>
                <Image src="/./logo.png" alt="" width={0} height={0} className='w-2/5' unoptimized/>
            </a>
                
            <p className='text-[1.5em] font-bold'>Sign In</p>
            </div>
            

            <form action="" className='flex flex-col gap-4 auth'>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={handleEmail}/>
                </div> 

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handlePassword}/>
                </div> 

                <button onClick={submitForm} className='bg-orange800 text-white rounded-lg w-full p-3'>Sign In</button>
            </form>

            <div className='set-3 flex-col pt-5'>
                <p>I don't have an account? <a href="/sign-up" className='text-orange800 underline'>Sign Up</a></p>

                <p>OR</p>

                <div className='set-3 border border-black p-3 rounded-lg w-full justify-center cursor-pointer'>
                    <RiGoogleFill />
                    <p>
                        Sign in with Google
                    </p>
                </div>
            </div>


        </div>


    </div>
  )
}

export default page