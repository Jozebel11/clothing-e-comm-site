import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slideshow() {
  return (
    <div className='flex justify-center'>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={7000}
        showArrows={false}
        transitionTime={3000}
        className="flex bg-slate-900 max-w-lg ml-5 justify-center"
        
        >
            <div className="bg-slate-900">
                <img className='max-w-md' loading='lazy' src="/11BFACCD-3EDB-4487-9FF3-FF7A19BE8DA0_1_201_a.jpeg" alt="" />
            </div>
            <div>
                <img className='max-w-md pb-4' loading='lazy' src="/IMG_8865.jpg" alt="" />
            </div>
            <div>
                <img className='max-w-sm' loading='lazy' src="/9C3D0D4C-7778-49E9-948E-0E7DE78B42AB_1_201_a.jpeg" alt="" />
            </div>

        </Carousel>
    
    </div>
  )
}

export default Slideshow