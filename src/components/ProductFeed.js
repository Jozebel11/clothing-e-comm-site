import React, { useState } from 'react'
import Product from './Product'

function ProductFeed({ products }) {
    let productFeed = products.map(({ id, title, description, price, category, image })=> (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
    ))
    const [showProducts, setProducts] = useState(true)
    const [productQuantity, setProductQuantity] = useState(productFeed.slice(0,5))

    function showMoreOrLess(){
        if (showProducts)[
            setProducts(showProducts => showProducts = false),
            setProductQuantity(productQuantity => productQuantity = productFeed)
        ]
        if (showProducts == false){
            setProducts(showProducts => showProducts = true),
            setProductQuantity(productQuantity => productQuantity = productFeed.slice(0,5))
        }
       
       
       
        
        console.log('click')
        
    }

  return (
    <div className='flex mx-5 pt-4 justify-center bg-white flex-col'
      style={{borderRadius: '3px'}}>
        <span className='uppercase text-center font-light justify-center underline'>products</span>
    <div className='flex mx-5 pt-4 justify-center bg-white flex-wrap mb-3'>
        {productQuantity}
    </div>
    <button onClick={showMoreOrLess} className='justify-center text-center uppercase text-xs hover:font-semibold m-4'>{showProducts ? 'all' : 'less'}</button>
    </div>

  )
}

export default ProductFeed