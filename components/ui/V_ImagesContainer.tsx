import React from 'react'
import { ImageInterface } from '../Interfaces/ImageInterface'
import ImageContent from './ImageContent'

const V_ImagesContainer = ({images}: any) => {
  return (
    <div className='flex flex-col gap-3'>
        {
            images.map((image: ImageInterface, i: number)=>{
                return (
                    <ImageContent {...image}/>
                )
            })
        }
    </div>
  )
}

export default V_ImagesContainer