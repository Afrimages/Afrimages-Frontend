import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'
import { RiShareFill } from 'react-icons/ri'

const page = () => {

  const data = [
    {
      title: "Post Views",
      value: "3000"
    },
    {
      title: "Likes",
      value: "200"
    },
    {
      title: "Followers",
      value: "20000"
    },
    {
      title: "Following",
      value: "100"
    }
  ]


  // const
  return (
    <div className='bg-gray-50'>
        <Navbar />

        <div className=" mt-[65px]">
          <div className="cover w-full h-[30vh] ">
            <Image src="/./banner.png" alt="" width={0} height={0} className='w-full h-full object-cover' unoptimized/>
          </div>

          <div className="details flex justify-between items-center px-xPadding -mt-[45px]">
            <div className='flex gap-5 justify-between items-center'>
            <Image width={0} height={0} src={"/./bb.jpeg"} alt='profile picture' className='w-[170px] h-[170px] rounded-full border-[5px] border-white' unoptimized/>
              <div>
                <h2>Dammy</h2>
                <p>@dammy410</p>
              </div>
            </div>

            <div className="flex gap-5 items-center ">
              <div className='flex items-center gap-2 border-2 border-orange800 text-orange800 py-3 px-5 rounded-md cursor-pointer'>
                <RiShareFill />
                <p>Share Profile</p>
              </div>

              <div className='flex items-center gap-2 bg-orange800 text-white py-3 px-5 rounded-md cursor-pointer'>
                <p>Edit Profile</p>
              </div>
            </div>
          </div>

          {/* hello */}
        </div>


        <div className="container mt-10">
          <div className="edit grid grid-cols-[30%_60%] justify-between">
            <div> 
              <h2>Personal Info</h2>
              <p>Upload your photo and personal details</p>
            </div>

            <form action="" className='bg-white p-5 rounded-md flex flex-col gap-5'>
              <div className='grid grid-cols-2 gap-5'>
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

          <div>
            <div>
              <h2>Portfolio</h2>
              <p>Share a few snippets of your work.</p>
            </div>

            <div className='bg-white p-5 rounded-md grid grid-cols-2 gap-20'>
                <div className='flex gap-5 flex-col'>
                  {
                    data.map((item, i)=>{
                      return(
                        <div className='flex justify-between items-center' key={i}>
                          <p>{item.title}</p>
                          <p>{item.value}</p>
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
              <div className='grid grid-cols-3 items-center justify-center text-center'>
                
              </div>
          </div>


        </div>
    </div>
  )
}

export default page