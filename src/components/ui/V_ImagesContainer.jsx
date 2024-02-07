import React from 'react'
import ImageContent from './ImageContent'

const V_ImagesContainer = ({images}) => {
  return (
    <div className='flex flex-col gap-3'>
        {
            images.map((image, i)=>{
                return (
                    <ImageContent {...image}/>
                )
            })
        }
    </div>
  )
}

export default V_ImagesContainer