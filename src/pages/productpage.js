import React from 'react'
import ProductPageProduct from '../components/ProductPageProduct'
import { useSelector } from "react-redux";
import { selectProduct } from "../slices/productSlice";

function ProductPage() {
    const product = useSelector(selectProduct)
    let productItem = product.map(({ id, title, description, price, category, image })=> (
        <ProductPageProduct
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
    ))
  return (

    <div className='lg:flex max-w-2xl mx-auto'>
        {productItem}
        hello
    </div>
  )
}

export default ProductPage