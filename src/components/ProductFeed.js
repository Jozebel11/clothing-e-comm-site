import React, { useState } from 'react'
import Product from './Product'
import { motion as m } from "framer-motion";
import  {container, item, scrollContainer}  from "../../animation";

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
    const [productQuantity, setProductQuantity] = useState(productFeed.slice(0,5))

    function showMoreOrLess(){
        if (showProducts)[
            setProducts(showProducts => showProducts = false),
            setProductQuantity(productQuantity => productQuantity = productFeed.slice(0,21))
        ]
        if (showProducts == false){
            setProducts(showProducts => showProducts = true),
            setProductQuantity(productQuantity => productQuantity = productFeed.slice(0,5))
        }
       
       
       
        
        console.log('click')
        
    }

  return (
    <div className='flex mx-5 pt-4 transition-all duration-700 justify-center bg-white flex-col'
      style={{borderRadius: '3px'}}>
    <div className='sm:mx-5 pt-10 transition-all duration-700 bg-white mb-3'>
        <m.div variants={scrollContainer}
         initial="hidden"
         whileInView="show"
          viewport={{ once: true }}>
          <div className='transition-all duration-700' >
          <m.div variant={item} className=' flex flex-wrap w-full transition-all duration-700 justify-center flex-row'>
            {productQuantity}
          </m.div>
          </div>
        </m.div>
    </div>
    <button onClick={showMoreOrLess} className='justify-center text-center uppercase text-xs hover:font-semibold m-4'>{showProducts ? 'show more' : 'show less'}</button>
    </div>

  )
}


export default ProductFeed