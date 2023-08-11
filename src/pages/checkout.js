import React from 'react'
import NavigationDark from '../components/NavigationDark'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from '../components/CheckoutProduct'
import { ImageSearch } from '@mui/icons-material';
import { signIn, signOut, useSession } from "next-auth/react"
import { selectTotal } from "../slices/basketSlice"
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Footer from '../components/Footer';
const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout() {
    const total = useSelector(selectTotal)
    const tax = total * 0.2
    const { data: session } = useSession();
    const items = useSelector(selectItems)
    let basketItems = items.map(({ productID, name, description, priced, category, size })=> (
        <CheckoutProduct
          key={productID}
          productID={productID}
          name={name}
          price={priced.toFixed(2)}
          description={description}
          category={category}
          quanitiy={items.filter(item => item.productID == productID).length}
          size={size}
        />
    ))
    const createCheckOutSession = async() => {
      const stripe = await stripePromise;
      //call the backend to create a checkout session
      const checkoutSession = await axios.post('/api/create-checkout-session', 
      {
        items: items,
        email: session.user.email
      })

      //redirect user to checkout
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })

      if(result.error) {
        alert(result.error.message)
      }


    }

  return (
    <div style={{minHeight:'100%'}}>
    <div style={{
        backgroundColor:'white',
        minHeight: '100px',
        
  
      }}>
        <NavigationDark />
    </div>
    <main className='lg:flex max-w-2xl mx-auto min-h-screen'>
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
            <span className='ml-16 font-bold'>£{total.toFixed(2)}</span>
            </h2>
            <button role="link" onClick={!session ? signIn : createCheckOutSession} className='flex transition-all duration-700 items-center justify-center text-center bg-black text-white p-2 w-[150px] h-[40px] uppercase'>
                {!session ? "Sign in to checkout" : "checkout"}
            </button>
            </>
        )}

      </div>

    </main>
    <Footer />
    </div>
  )
}

export default Checkout