import React from 'react'
import V_ImagesContainer from './V_ImagesContainer'

const H_ImagesContainer = ({images}: any) => {
    const images3 = [
        {
            imageUrl: "./pp.png",
            id: "sin89enewe",
            title: "Boys Playing",
            creator: {
                profilePicture: "./logo.png",
                _id: "wwi929212h",
                fullName: "Emmy Ogunmepon"
            }
        },
        {
            imageUrl: "./banner.png",
            id: "sin89enewe",
            title: "Boys Playing",
            creator: {
                profilePicture: "./logo.png",
                _id: "wwi929212h",
                fullName: "Emmy Ogunmepon"
            }
        },
        {
            imageUrl: "./bb.jpeg",
            id: "sin89enewe",
            title: "Boys Playing",
            creator: {
                profilePicture: "./logo.png",
                _id: "wwi929212h",
                fullName: "Emmy Ogunmepon"
            }
        }
    ]

  return (
    <div className='grid grid-cols-3 gap-3'>
        <V_ImagesContainer images={images}/>
        <V_ImagesContainer images={images3}/>
        <V_ImagesContainer images={images}/>
    </div>
  )
}

export default H_ImagesContainer