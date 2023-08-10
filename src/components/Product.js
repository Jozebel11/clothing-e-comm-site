import React from 'react'
import Image from "next/image"
import { minHeight, minWidth } from '@mui/system'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import { useRouter } from "next/router"
import { useState  } from 'react'
import { useEffect } from 'react'
import { Translate } from '@mui/icons-material'
import Link from 'next/link'

function Product({productID, name, price, description, category}) {
    const prices = (x) => {
      return Number.parseFloat(x).toFixed(2)
    }

    const priced = Number(prices(price))
    const product = {
        productID, 
        name, 
        priced, 
        description, 
        category

    };
   



 

    const dispatch = useDispatch();

    const addItemToBasket = () => {
    // sending the product as an action to the redux store... the basket slice
        dispatch(addToBasket(product))

    }
    
  return (
    <div className='flex relative flex-col justify-center bg-white sm:mt-10 sm:px-2'
    
    >
        <Link href={`/product/${product.productID}`}
        style={{
          textDecoration:'none',
        }}>
        <div className='flex overflow-hidden flex-col justify-center cursor-pointer hover:font-semibold'>
        <div className='overflow-hidden'>
        <Image 
        className='self-center bg-[#d1c3b3d9] transition-all text-black text-center duration-500 overflow-hidden hover:scale-110'
          src={`/${name}.jpg`}
          justify-content={'center'}
          height={'300'}
          width={'300'}
          alt={`${name}`} 
          
        />
        </div>
        <p className='content-center mt-4 mb-2 justify-center uppercase text-xs text-black text-center'>{name}</p>
        </div>
        </Link>
        <p className='font-thin justify-center content-center text-center text-sm'
          
          
        >£{price}</p>
        
        

    </div>
  )
}
export default Product