import React from 'react'
import Image from "next/image"
import { minHeight, minWidth } from '@mui/system'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({id, title, price, description, category, image}) {

    const dispatch = useDispatch();

    const removeItemFromBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image

        };
    // sending the product as an action to the redux store... the basket slice
        dispatch(removeFromBasket(product))

    }
    
  return (
    <div className='flex flex-col justify-center bg-white mr-4 mt-10 pr-3'
      style={{
        
        maxWidth:'250px',
        minWidth:'250px',
        position: 'relative',
        height:'350px',
        borderRight: 'solid 0.5px lightgrey'
        
      }}
    
    >
        <div className='absolute top-0 right-2 text-xs italic text-gray-400'>{category}</div>
        <div className='flex flex-col justify-center cursor-pointer hover:font-semibold'>
        <Image 
          src={image}
          height={'150'}
          width={'100%'}
          objectFit='contain'
          
        />
        <p className='content-center mt-4 mb-4 justify-center uppercase text-xs text-black text-center'>{title}</p>
        </div>
        <p className='font-semibold text-sm'
          style={{
            position:'absolute',
            bottom: '0',
            left: '20px'


          }}
          
        >£{price}</p>
        <button onClick={removeItemFromBasket} className='absolute bottom-0 right-0 mr-3 mb-3 text-xs uppercase hover:font-semibold'>Remove From Bag</button>
        

    </div>
  )
}

export default CheckoutProduct