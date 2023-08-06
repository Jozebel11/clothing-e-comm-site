import { fontFamily, padding } from '@mui/system';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slideshow() {
  return (
    <div className='flex justify-center content-center'>
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
        className="flex max-w-full justify-center content-center"
        
        >
            <div>
                <img className='max-w-full' loading='lazy' src="/home-slide.jpg" alt="" />
            </div>
            <div>
                <img className='max-w-full' loading='lazy' src="/home-slide-2.jpg" alt="" />
            </div>
            

        </Carousel>
    
    </div>
  )
}

export default Slideshow