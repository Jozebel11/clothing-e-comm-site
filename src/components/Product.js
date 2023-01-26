import React from 'react'
import Image from "next/image"
import { minHeight, minWidth } from '@mui/system'

function Product({id, title, price, description, category, image}) {
    
  return (
    <div className='flex flex-col justify-center bg-white m-4 p-2'
      style={{
        borderRadius:'5px',
        maxWidth:'250px',
        minWidth:'250px',
        position: 'relative',
        height:'350px'
        
      }}
    
    >
        <Image 
          src={image}
          height={'150'}
          width={'100%'}
          objectFit='contain'
          
        />
        <p className='content-center mt-4 mb-4 justify-center text-black text-center'>{title}</p>
        <p className='font-semibold'
          style={{
            position:'absolute',
            bottom: '0'


          }}
          
        >£{price}</p>

    </div>
  )
}

export default Product