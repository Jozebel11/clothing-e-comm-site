import React from 'react';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion as m } from "framer-motion";
import  {scrollContainer, liItem , item, itemLeft, itemRight, videoContainer, container, underlineRight, underlineLeft, ulContainer}  from "../../animation";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Footer() {
  const router = useRouter()
  return (
    <div className='h-[250px] mt-4 min-w-full'>
        <div className='border-t-[1px] flex flex-col items-center justify-content-center border-zinc-400 mx-10'>
        <div className=' font-krona flex text-[12px] flex-row m-4 '>
                  <button onClick={() => router.push('/')} className='text-black uppercase no-underline border-r-2 border-black px-2'>home</button>
                  <button onClick={() => router.push('/about')} className='text-black uppercase no-underline border-r-2 border-black px-2'>about</button>
                  <button onClick={() => router.push('/')} className='text-black uppercase no-underline border-r-2 border-black px-2'>clothing</button>
                  <button onClick={() => router.push('/contact')} className='text-black uppercase no-underline px-2'>contact us</button>
            </div>

            <div>
                <h1 className='text-[12px]'>
                © 2023 CARO by jozebel.dev
                </h1>
                <p className='text-[12px] text-center -mt-2'>London, UK</p>
            </div>
            <div className='flex justify-content-around mb-4 w-[300px] mt-2'>
                  <m.a variants={item} className='text-black overflow-hidden' href='https://www.instagram.com/jozebel.dev/'><InstagramIcon/></m.a>
                  <m.a variants={item} className='text-black overflow-hidden' href='https://www.facebook.com/jjhardwicke/?locale=en_GB'><FacebookIcon/></m.a>
                  <m.a variants={item} className='text-black overflow-hidden' href='https://github.com/Jozebel11'><GitHubIcon/></m.a>
            </div>
        </div>
    </div>
  )
}

export default Footer