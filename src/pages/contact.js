import React, { useState } from 'react'
import { motion as m } from "framer-motion";
import  {scrollContainer, liItem , item, itemLeft, itemRight, videoContainer, container, underlineRight, underlineLeft, ulContainer}  from "../../animation";
import CircularProgress from '@mui/material/CircularProgress';
import NavigationDark from '../components/NavigationDark';
import { useRouter } from 'next/router';


function Contact() {

  const router = useRouter();
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('')
  const [submitLoader, setSubmitLoader] = useState(false)

  const handleSubmit = async (e) => {
    setSubmitLoader(true);
    e.preventDefault()
    try {
      const res = await fetch('/api/contact/contact', {
        method: 'POST',
        body: JSON.stringify({
          name, email, subject, mobile, message

        }),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (res.status === 200) {
        setSubmitted(true)
      }
    } catch(err) {
      console.error('Err', err)
    }
    
  

  }
  
  return (
    <div className='min-h-[900px] mb-4 sm:min-h-screen min-w-full flex overflow-hidden flex-col items-center'  id='contact-page' >
    <NavigationDark/>
    <div className='mt-40 w-full   sm:max-w-[1200px]'>
      {submitted ? 
      <div className=' transition-all duration-700 delay-100  flex flex-col justify-content-center items-center bg-white'>
        <h1 className='text-center uppercase font-thin m-10'>Thank You for your message!</h1>
        <p className='text-center font-thin uppercase'>Your enquiry has been submitted.</p>
        <p className='text-center font-thin uppercase mb-10'>We will be in contact with you shortly.</p>
        <button onClick={() => router.push('/')} className='uppercase underline'>Continue Shopping</button>
      </div> 
        :
    <div className='rounded-xl transition-all bg-white duration-700 delay-100'>
      <form onSubmit={handleSubmit}
          className="flex flex-col px-8 py-8 bg-white rounded-xl dark:bg-blue-500"
        >
          <h1 className=" uppercase w-[235px] mb-4 border-b-[1px] border-black font-thin text-black dark:text-gray-50">
           Contact Us
          </h1>
          <p className='pt-2 uppercase text-justify font-mont'>Opening hours:</p>
          <ul className='uppercase font-thin'>
            <li>Monday - Friday: 08:00 – 18:00 GMT</li>
            <li>Saturday: 10:00 – 18:00 GMT</li>
            <li>Sunday: 10:00 – 16:00 GMT </li>
          </ul>
          <p className='font-thin text-xs uppercase italic'>We would love to hear from you, so please get in touch.<br></br> Our team is here to answer any questions you might have regarding your order, our store and our collections.</p>

          <label
            for="name"
            className="text-black font-semibold font-mont font-light mt-8"
          >
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            id='name'
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
         

          <label
            for="email"
            className="text-black font-semibold font-mont font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            id='email'
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          
          <label
            for="mobile"
            className="text-black font-semibold font-mont font-light mt-4 dark:text-gray-50"
          >
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <input
            id='mobile'
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            for="subject"
            className="text-black font-semibold font-mont font-light mt-4 dark:text-gray-50"
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            id='subject'
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Your subject'
            required
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
         
          <label
            for="message"
            className="text-black font-semibold font-mont font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id='message'
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your Message'
            required
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-black uppercase text-white text-lg flex flex-row items-center"
            >
              {submitLoader ? <CircularProgress color='inherit' /> : 'Submit'}
            </button>
          </div>
        </form>
    </div>
  }
    </div>
    </div>
  )
}

export default Contact