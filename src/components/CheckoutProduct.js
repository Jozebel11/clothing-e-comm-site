import React from 'react'
import Image from "next/image"
import { minHeight, minWidth } from '@mui/system'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({id, title, price, description, category, image}) {

    const dispatch = useDispatch();

    const removeItemFromBasket = () => {
    // sending the product as an action to the redux store... the basket slice
        dispatch(removeFromBasket({id}))

    }
    
  return (
    <div className='flex justify-center bg-white mr-4 pr-3'
      style={{
        minWidth:'250px',
        position: 'relative',
        height:'200px',
        borderBottom:'solid 0.5px #d1d5db '
        
      }}
    
    >
        <div className='flex items-start cursor-pointer hover:font-semibold'>
        <Image 
          className='justify-center'
          src={image}
          height={'200'}
          width={'100%'}
          objectFit='contain'
        />
        <p className='content-center mt-4 mb-4 mx-4 justify-center w-48 uppercase text-xs text-black'>{title}</p>
        </div>
        <div className='flex flex-col content-between'>
          <p className='font-semibold mt-4 text-sm'
          
          
          >£{price}</p>
          <button onClick={removeItemFromBasket} className='items-center mt-20 mr-3 mb-3 text-xs uppercase hover:font-semibold'>Remove</button>
        </div>

    </div>
  )
}

export default CheckoutProduct