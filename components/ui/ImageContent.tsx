import React from 'react'
import { ImageInterface } from '../Interfaces/ImageInterface'


const ImageContent = (content: ImageInterface) => {

  return (
    <div className='w-full'>
        <img src={content.imageUrl} alt={content.title}/>

        <div className="overlay">
            
        </div>
    </div>
  )
}

export default ImageContent