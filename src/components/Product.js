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
    <div className='flex relative min-w-[300px] min-h-[550px] flex-col justify-center bg-white mr-4 mt-10 pr-3'
    
    >
        <Link href={`/product/${product.productID}`}
        style={{
          textDecoration:'none',
        }}>
        <div className='flex flex-col justify-center cursor-pointer hover:font-semibold'>
        <Image 
        className='self-center'
          src={product.productID ? `/${name}.jpg` : ''}
          justify-content={'center'}
          height={'300'}
          width={'300'}
          
        />
        <p className='content-center mt-4 mb-4 justify-center uppercase text-xs text-black text-center'>{name}</p>
        </div>
        </Link>
        <p className='font-thin text-sm'
          style={{
            position:'absolute',
            bottom: '0',
            left: '20px'


          }}
          
        >£{price}</p>
        <button onClick={addItemToBasket} className='absolute bottom-0 right-0 mr-3 mb-3 text-xs uppercase hover:font-semibold'>Add to Bag</button>
        

    </div>
  )
}
export default Product