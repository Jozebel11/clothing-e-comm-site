import React, { useState } from 'react'
import Product from './Product'

function ProductFeed({ products }) {
    let productFeed = products.map(({ productID, name, description, price, category })=> (
        <Product
          key={productID}
          productID={productID}
          name={name}
          price={price}
          description={description}
          category={category}
          
        />
    ))
    const [showProducts, setProducts] = useState(true)
    const [productQuantity, setProductQuantity] = useState(productFeed.slice(0,6))

    function showMoreOrLess(){
        if (showProducts)[
            setProducts(showProducts => showProducts = false),
            setProductQuantity(productQuantity => productQuantity = productFeed.slice(6,12))
        ]
        if (showProducts == false){
            setProducts(showProducts => showProducts = true),
            setProductQuantity(productQuantity => productQuantity = productFeed.slice(0,6))
        }
       
       
       
        
        console.log('click')
        
    }

  return (
    <div className='flex mx-5 pt-4 justify-center bg-white flex-col'
      style={{borderRadius: '3px'}}>
    <div className='flex mx-5 pt-4 justify-center bg-white flex-wrap mb-3'>
        {productQuantity}
    </div>
    <span className='justify-center text-center uppercase text-gray-400 text-xs hover:font-semibold m-4'>{`Showing ${productFeed.indexOf(productFeed[0]) + 1} - ${productFeed.indexOf(productFeed[0] + 1)} out of ${productFeed.length}`}</span>
    <button onClick={showMoreOrLess} className='justify-center text-center uppercase text-xs hover:font-semibold m-4'>0</button>
    <button onClick={showMoreOrLess} className='justify-center text-center uppercase text-xs hover:font-semibold m-4'></button>
    </div>

  )
}


export default ProductFeed