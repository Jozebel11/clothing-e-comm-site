import React from 'react'
import Image from "next/image"
import { minHeight, minWidth } from '@mui/system'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import { useRouter } from "next/router"
import { useState  } from 'react'
import { useEffect } from 'react'
import { Translate } from '@mui/icons-material'

function ProductPageProduct({id, title, price, description, category, image}) {
    const product = {
        id, 
        title, 
        price, 
        description, 
        category, 
        image

    };
   



 

    const dispatch = useDispatch();

    const addItemToBasket = () => {
    // sending the product as an action to the redux store... the basket slice
        dispatch(addToBasket(product))

    }
    
  return (
    <div className='flex justify-center bg-white mr-4 mt-10 pr-3'
      style={{
        
        maxWidth:'1500px',
        minWidth:'300px',
        position: 'relative',
        height:'700px',
        
        
      }}
    
    >
        <div className='absolute top-0 left-5 text-sm italic text-gray-400'>{category}</div>
        <div className='flex flex-col justify-center w-1/2'>
        <Image 
        className='self-center'
          src={image}
          justify-content={'center'}
          height={'300'}
          width={'300'}
          
        />
        <p className='content-center mt-4 mb-4 justify-center uppercase text-black text-center'>{title}</p>
        </div>
        <div className='flex ml-16 flex-wrap w-1/4 '>
            <h2 className='flex self-end uppercase text-xl'>Description</h2>
            <p className='h-fit -mb-28 uppercase text-xs '>{description}</p>
            <p className='flex align-top self-start font-semibold'>£{price}</p>
            <button onClick={addItemToBasket} className='flex ml-10 uppercase hover:font-semibold'>Add to Bag</button>
        
        </div>

    </div>

  )
}
export default ProductPageProduct