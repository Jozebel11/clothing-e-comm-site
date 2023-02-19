import React from 'react'
import Navigation from '../components/Navigation'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from '../components/CheckoutProduct'
import { ImageSearch } from '@mui/icons-material';
import { signIn, signOut, useSession } from "next-auth/react"
import { selectTotal } from "../slices/basketSlice"

function Checkout() {
    const total = useSelector(selectTotal)
    const tax = total * 0.2
    const { data: session } = useSession();
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
            <h1 className='text-3xl border-b pb-4 uppercase'>{items.length === 0 ? 'Bag Empty': `${items.length} items in your bag`}</h1>
            {basketItems}
        </div>

      </div>
      <div className='flex flex-col mt-32 pl-10 mb-4 '
        style={{minWidth:'200px'}}>
        {items.length > 0 && (
            <>
            <h3 className='flex uppercase text-xs'>VAT
            <span className='ml-28 font-bold'>£{tax.toFixed(2)}</span>
            </h3>
            <h2 className='flex mt-4 mb-10 uppercase text-base'>total
            <span className='ml-16 font-bold'>£{total}</span>
            </h2>
            <button onClick={!session ? signIn : signOut} className='uppercase text-sm cursor-pointer hover:font-semibold'>
                {!session ? "Sign in to checkout" : "checkout"}
            </button>
            </>
        )}

      </div>

    </main>
    </div>
  )
}

export default Checkout