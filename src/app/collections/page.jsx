import Navbar from '@/components/ui/Navbar'
import UnderConstruction from '@/components/ui/UnderConstruction'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar active={1}/>

        <div className='mt-24'>
            <UnderConstruction />
        </div>
    </>
  )
}

export default page