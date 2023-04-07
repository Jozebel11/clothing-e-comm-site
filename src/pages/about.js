import React from 'react'
import Header from '../components/Navigation'
import Slideshow from '../components/Slideshow'
import Footer from '../components/Footer'

function About() {
  return (
    <div
      style={{
        backgroundColor:'#0F172A',
        minHeight: '100vh'
        
  
    }}>
        <Header/>
        <div className='flex pt-40'>
            <div className='flex flex-col w-full justify-center p-10 md:flex-row md:justify-items-center '>
                <div className='max-w-lg'>
                    <h1 className='text-gray-300 uppercase'>About</h1>
                    <p className='text-gray-300 text-lg'>
                        This is a fake e-commerce site built for portfolio project purposes only. It is to showcase my ability to use a variety of technologies such as ReactJS, NextJS, Redux, Webhooks, TailwindCSS, Google Cloud services, Vercel and Stripe API.
                    </p>
                    <p className='text-gray-300'>This project focuses on the functionality of the site, rather than the design. For projects focussed on UI/UX, please check out my <a className='text-gray-300 no-underline hover:underline' href="https://www.josephhardwicke.com">portfolio.</a></p>
                    <p className='text-gray-300 text-md'>To test out the funcitonality of this website, please:</p>
                    <ul className='list-decimal text-gray-300 uppercase text-xs flex flex-col'>
                        <li className='mb-3'>Sign in</li>
                        <li className='mb-3'>Select any amount of items you wish to place in your bag</li>
                        <li className='mb-3'>Go to your bag</li>
                        <li className='mb-3'>Checkout</li>
                        <li className='mb-3'>Input the required details into the stripe</li>
                        <li className='mb-3'>use stripes demo payment details by inputing '4242424242424242' for the card number, '04/24' as the date and '424' as the CVC</li>
                        <li className='mb-3'>Go to Orders and check your order went through</li>
                    </ul>

                </div>
                <div className='flex pt-14 md:ml-20'>
                    <Slideshow />
                </div>
            </div>

        </div>
        <Footer/>
        
       
    </div>
  )
}

export default About