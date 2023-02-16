import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
    console.log(products, "test")
  return (
    <div className='flex mx-5 pt-4 justify-center bg-white flex-wrap'
      style={{borderRadius: '3px'}}>
        <span className='uppercase font-light underline'>All products</span>
    <div className='flex mx-5 pt-4 justify-center bg-white flex-wrap'>
        {products.map(({ id, title, description, price, category, image })=> (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
        ))}
    </div>
    </div>

  )
}

export default ProductFeed