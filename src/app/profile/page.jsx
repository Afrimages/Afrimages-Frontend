"use client"
import Footer from '@/components/ui/Footer'
import MyImage from '@/components/ui/MyImage'
import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'
import { RiShareFill } from 'react-icons/ri'
import useLocalStorage from 'use-local-storage'

const page = () => {
  const [user, setUser] = useLocalStorage("user", null)

  const data = [
    {
      title: "Downloads",
      value: "3000"
    },
    {
      title: "Likes",
      value: "200"
    },
    {
      title: "Assets",
      value: "100"
    },
    {
      title: "Followers",
      value: "20000"
    }
  ]

  const images3 = [
    {
        imageUrl: "/./pp.png",
        _id: "sin89enewe",
        title: "Boys Playing",
        creator: {
            profilePicture: "./logo.png",
            _id: "wwi929212h",
            fullName: "Emmy Ogunmepon"
        }
    },
    {
        imageUrl: "/./banner.png",
        _id: "sin89enewe",
        title: "Boys Playing",
        creator: {
            profilePicture: "./logo.png",
            _id: "wwi929212h",
            fullName: "Emmy Ogunmepon"
        }
    },
    {
        imageUrl: "/./bb.jpeg",
        _id: "sin89enewe",
        title: "Boys Playing",
        creator: {
            profilePicture: "./logo.png",
            _id: "wwi929212h",
            fullName: "Emmy Ogunmepon"
        }
    },
    {
      imageUrl: "/./pp.png",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
          profilePicture: "./logo.png",
          _id: "wwi929212h",
          fullName: "Emmy Ogunmepon"
      }
  },
  {
      imageUrl: "/./banner.png",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
          profilePicture: "./logo.png",
          _id: "wwi929212h",
          fullName: "Emmy Ogunmepon"
      }
  },
  {
      imageUrl: "/./bb.jpeg",
      _id: "sin89enewe",
      title: "Boys Playing",
      creator: {
          profilePicture: "./logo.png",
          _id: "wwi929212h",
          fullName: "Emmy Ogunmepon"
      }
  }
]


  // const tabs = [

  // ]
  return (
    <div className='bg-gray-50'>
        <Navbar active={"p"}/>

        <div className=" mt-[65px]">
          <div className="cover w-full h-[30vh] md:h-[180px]">
            <Image src="/./banner.png" alt="" width={0} height={0} className='w-full h-full object-cover' unoptimized/>
          </div>

          <div className="details flex md:flex-col md:items-start justify-between items-center px-xPadding -mt-[45px] md:-mt-[30px]">
            <div className='flex gap-5 justify-between items-center'>
            <Image width={0} height={0} src={user.profilePicture} alt='profile picture' className='w-[170px] md:w-[140px] md:h-[140px] h-[170px] rounded-full border-[5px] border-white object-cover' unoptimized/>
              <div>
                <h2 className='font-[600] text-md'>{user.firstName + " " + user.lastName}</h2>
                <p>@dammy410</p>
              </div>
            </div>

            <div className="flex gap-5 items-center md:mt-[20px] ">
              <div className='flex items-center gap-2 border-2 border-orange800 text-orange800 py-3 px-5 rounded-md cursor-pointer'>
                <RiShareFill />
                <p>Share Profile</p>
              </div>

              <div className='flex items-center gap-2 bg-orange800 border-2 border-orange800 text-white py-3 px-5 rounded-md cursor-pointer'>
                <p>Edit Profile</p>
              </div>
            </div>
          </div>

          {/* hello */}
        </div>


        <div className="container my-10">
          <div className="edit grid grid-cols-[30%_60%] md:gap-5 md:grid-cols-none justify-between  md:block">
            <div> 
              <h2 className='text-md font-medium'>Personal Info</h2>
              <p>Upload your photo and personal details</p>
            </div>

            <form action="" className='bg-white p-5 rounded-md flex flex-col gap-5 md:w-full md:mt-3'>
              <div className='grid grid-cols-2 md:grid-cols-none gap-5 edit'>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" />
                </div>
              </div>

              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
            </form>
          </div>

          <div className='mt-5'>
            <div>
              <h2 className='text-md font-medium'>Portfolio</h2>
              <p>Share a few snippets of your work.</p>
            </div>

            <div className='bg-white p-5 rounded-md grid md:flex md:flex-col grid-cols-2 gap-20 md:mt-3'>
                <div className='flex gap-5 flex-col'>
                  {
                    data.map((item, i)=>{
                      return(
                        <div className='flex justify-between items-center' key={i}>
                          <p>{item.title}</p>
                          <p className='font-[600]'>{item.value}</p>
                        </div>
                      )
                    })
                  }
                </div>

                <div>
                  <h2>Social Accounts</h2>
                  <div>

                  </div>
                </div>
            </div>

          </div>


          <div className='mt-20'>
              <div className=''>
                My Assets
              </div>

              <div className="grid grid-cols-3 gap-5 md:grid-cols-none">
                {
                  images3.map((img, i)=>{
                    return(
                      <MyImage {...img} />
                    )
                  })
                }
              </div>
          </div>


        </div>

        <Footer />
    </div>
  )
}

export default page