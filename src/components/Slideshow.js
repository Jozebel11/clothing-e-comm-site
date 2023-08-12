import { fontFamily, padding } from '@mui/system';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slideshow() {
  return (
    <div className='flex justify-center flex-col content-center'>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={7000}
        showArrows={false}
        transition='crossfade'
        transitionTime={3000}
        className="flex max-w-full relative  justify-center content-center"
        
        >
            <div>
                <img className='max-w-full' loading='lazy' src="/home-slide.jpg" alt="" />
            </div>
            <div>
                <img className='max-w-full' loading='lazy' src="/home-slide-2.jpg" alt="" />
            </div>
            
        </Carousel>
        <div className='z-10  w-[200px] md:w-[400px] self-center md:-mt-96 md:mb-96 -mt-28 mb-28'>
          <span className='uppercase text-[8px] md:text-sm text-white'>new collection</span>
          <h1 className='text-center text-white md:text-[50px] uppercase backdrop-blur-sm  font-thin border-[2px] '>summer 23</h1>
        </div>
        
    
    </div>
  )
}

export default Slideshow