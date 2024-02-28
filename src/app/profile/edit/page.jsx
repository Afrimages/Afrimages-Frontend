import Edit from '@/components/ui/Edit'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar />

        <div className='mt-24'>
            <Edit />
        </div>
    </>
  )
}

export default page