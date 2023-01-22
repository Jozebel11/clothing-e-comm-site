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
        transitionTime={3000}
        className="flex max-w-lg justify-center content-center"
        
        >
            <div className="flex content-center flex-col" style={{
                
                padding:'20px',
                
            }}>
                <img className='max-w-md' loading='lazy' src="/11BFACCD-3EDB-4487-9FF3-FF7A19BE8DA0_1_201_a.jpeg" alt="" />
                <div><p style={{
                    color: 'white',
                    marginTop: '20px',
                    fontFamily: 'Covered By Your Grace',
                    fontSize: '25px'
                }}>Explore the the outdoors with our <span style={{color:'#EC515C'}}>Venture</span> range.</p></div>
            </div>
            <div>
                <img className='max-w-md pl-6 pr-6' loading='lazy' src="/IMG_8865.jpg" alt="" />
            </div>
            <div>
                <img className='max-w-sm' loading='lazy' src="/9C3D0D4C-7778-49E9-948E-0E7DE78B42AB_1_201_a.jpeg" alt="" />
            </div>

        </Carousel>
    
    </div>
  )
}

export default Slideshow