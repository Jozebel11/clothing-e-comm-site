import React from 'react'
import Navigation from '../components/Navigation'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from '../components/CheckoutProduct'

function Checkout() {
    const items = useSelector(selectItems)
    let basketItems = items.map(({ id, title, description, price, category, image })=> (
        <CheckoutProduct
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
    <div>
    <div style={{
        backgroundColor:'#0F172A',
        minHeight: '100px',
        
  
      }}>
        <Navigation />
    </div>
    <main className='lg:flex max-w-2xl mx-auto'>
      <div>
        <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4 uppercase'>Basket</h1>
            {basketItems}
        </div>

      </div>
      <div>

      </div>

    </main>
    </div>
  )
}

export default Checkout