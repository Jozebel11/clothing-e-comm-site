import React from 'react'
import Image from "next/image"
import { minHeight, minWidth } from '@mui/system'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../slices/basketSlice'
import { selectItems } from "../slices/basketSlice";

function CheckoutProduct({productID, name, price, description, category, quantity, size}) {

  const product = {
    productID, 
    name, 
    price, 
    description, 
    category,
    size

};

    const dispatch = useDispatch();

    const removeItemFromBasket = () => {
    // sending the product as an action to the redux store... the basket slice
        dispatch(removeFromBasket({productID}))

    }
    const updateCartHandler = (item, qty) => {
      
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
          className='justify-center bg-[#d1c3b3d9] text-center'
          src={productID ? `/${name}.jpg` : ''}
          height={'150'}
          width={'100'}
          alt={`${name}`}
        />
        <div className='flex flex-col'>
        <p className='content-center mt-4 mb-4 mx-4 justify-center w-48 uppercase text-xs text-black'>{name}</p>
        <p className='content-center mb-4 mx-4 justify-center w-48 uppercase text-xs text-black'>Size: {size}</p>
        <p className='content-center mb-4 mx-4 justify-center w-48 uppercase text-xs text-black'>£{price}</p>
        </div>
        </div>
        <div className='flex content-between'>
          <button onClick={removeItemFromBasket} className='items-center mt-20 mr-3 mb-3 text-xs uppercase hover:font-semibold'>Remove</button>
        </div>

    </div>
  )
}

export default CheckoutProduct