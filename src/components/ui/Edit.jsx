"use client"
import React from 'react'
import { HiSave } from 'react-icons/hi'
import useLocalStorage from 'use-local-storage'

const Edit = () => {
    const [user, setUser] = useLocalStorage("user", {})

  return (
    <div>
        <h2 className='text-center text-[32px] font-semibold'>Edit Profile</h2>

        <div className='flex flex-col gap-5 w-2/3 md:w-full md:p-xPadding m-auto items-center justify-center my-5'>
            <div className='flex flex-col gap-3'>
                <img src={user?.profilePicture} alt="" className='rounded-full'/>
                <button className='bg-orange800 py-3 px-6 text-white rounded-md'>Change Profile Picture</button>
            </div>

            <div className="flex flex-wrap edit gap-5">
                <div>
                    <p>First Name</p>
                    <input type="text"/>
                </div>

                <div>
                    <p>Last Name</p>
                    <input type="text" />
                </div>

                <div>
                    <p>Username</p>
                    <input type="text"/>
                </div>

                <div>
                    <p>Email</p>
                    <input type="text" />
                </div>
                
                <div className='bio'>
                    <p>Short Bio</p>
                    <textarea name="" id=""></textarea>
                </div>

                <div>
                    <p>Twitter</p>
                    <input type="text" />
                </div>


                <div>
                    <p>Instagram</p>
                    <input type="text" />
                </div>
                
                <div>
                    <p>Website</p>
                    <input type="text" />
                </div>

            </div>

            <button className='bg-orange800 py-3 px-6 text-white rounded-md flex gap-2 items-center md:w-full text-center justify-center'>Save <HiSave /> </button>
        </div>
    </div>
  )
}

export default Edit