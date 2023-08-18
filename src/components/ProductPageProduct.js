import React from 'react'
import Image from "next/image"
import { minHeight, minWidth } from '@mui/system'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import { useRouter } from "next/router"
import { useState  } from 'react'
import { useEffect } from 'react'
import { Translate } from '@mui/icons-material'
import Footer from './Footer'

function ProductPageProduct({productID, name, price, description, category }) {
  const prices = (x) => {
    return Number.parseFloat(x).toFixed(2)
  }
  let size;
  const priced = Number(prices(price));
  


    let [itemAdded, setItemAdded] = useState(false);
 

    const dispatch = useDispatch();

    const addItemToBasket = () => {
    // sending the product as an action to the redux store... the basket slice
        dispatch(addToBasket(product))
        setItemAdded(true)
        setTimeout(() => {
          setItemAdded(false);
       
        }, "2000")


    }

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const [selectedSize, setSelectedSize] = useState(null);

    size = String(selectedSize)

    const product = {
      productID, 
      name, 
      priced, 
      description, 
      category,
      size

  };
   




    

    
  return (
    <div className='flex justify-center flex-col lg:flex-row bg-white mt-40'
      style={{
        
        maxWidth:'1500px',
        minWidth:'270px',
        position: 'relative',
        height:'700px',
        
        
      }}
    
    >
        <div className='flex flex-col  mt-4 lg:w-1/2 lg:mt-0 pt-8 lg:pt-0 justify-center'>
        <Image 
        className='self-center md:w-[50%] lg:w-[70%] bg-[#d1c3b3d9] text-center'
        src={product.productID ? `/${name}.jpg` : ''}
          justify-content={'center'}
          height={'600'}
          width={'600'}
          alt={`${name}`}
          
        />
        </div>
        <div className='flex ml-8 flex-wrap flex-col items-start pb-20 max-w-50 lg:w-1/4'>
        <p className=' mt-4 -ml-8 lg:ml-0 mb-8 self-center lg:self-start uppercase  text-black '>{name}</p>
        <span className='uppercase text-xs mb-2 underline'>eu size</span>
        <div className='flex self-center -ml-8 sm:self-start sm:ml-0 mb-8'>
        {sizes.map(size => (
        <button
          key={size}
          className={selectedSize === size ? 'bg-black transition-all duration-600 text-white rounded-full mr-2 border-black border-[1px] h-12 w-12' : 'rounded-full hover:bg-black hover:text-white transition-all duration-600 mr-2 text-center border-black border-[1px] h-12 w-12 '}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
        ))}
        </div>
         

        <p className='flex align-top transition-all duration-700 self-start font-thin'>£{price}</p>
            {selectedSize === null ? <span className='uppercase italic text-xs font-thin'>please select a size</span> : <button onClick={addItemToBasket} className='flex transition-all mt-4 duration-700 items-center justify-center text-center bg-black text-white p-2 w-[150px] h-[40px] uppercase'>{itemAdded ? 'Item Added!' : 'Add to Bag'}</button>}
            <h2 className='flex mt-10 self-start uppercase text-lg'>Description</h2>
            <p className='h-fit uppercase w-full text-xs '>{description}</p>
        
        </div>

    </div>

  )
}
export default ProductPageProduct