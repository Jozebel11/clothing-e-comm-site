import React from 'react'
import Header from '../components/Navigation'
import { CheckCircleIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

function success() {
    const router = useRouter();
  return (
    <div>
    <div
        style={{
            backgroundColor:'#0F172A',
            minHeight: '100px',
            
      
          }}>
        <Header/>
    </div>
        <main className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col p-10'>
                <div className='flex justify-center space-x-3 pt-10 mb-5'>
                    <CheckCircleIcon className='text-green-500 h-10' />
                    <h1 className='text-3xl uppercase '>
                        Your order has been confirmed!
                    </h1>
                </div>
                <p>
                    Thank you for shopping with us. A confirmation will be sent once the item has been shipped. If you would like to check the status of your order(s) please click on the link below.
                </p>
                <button 
                onClick={() => router.push("/orders")}
                className='uppercase hover:font-semibold'>Go to my orders</button>
            </div>

        </main>
        <Footer/>
    
    </div>
    
  )
}

export default success