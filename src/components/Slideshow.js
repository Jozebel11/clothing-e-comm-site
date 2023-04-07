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
        className="flex max-w-2xl justify-center content-center"
        
        >
            <div>
                <img className='max-w-2xl' loading='lazy' src="/D16917A8-012A-4AF8-9B42-6C55ECB45452_1_102_o.jpeg" alt="" />
            </div>
            <div>
                <img className='max-w-2xl' loading='lazy' src="/FFDBA02C-4E82-4340-8273-1592D228A14C_1_102_o.jpeg" alt="" />
            </div>
            <div>
                <img className='max-w-2xl' loading='lazy' src="/11770C3D-2969-4FCB-BECC-769B8257D11D_1_102_o.jpeg" alt="" />
            </div>
            <div>
                <img className='max-w-2xl' loading='lazy' src="/9F6BD818-0AB5-4F03-A577-9CF6AE6EDC60_1_102_o.jpeg" alt="" />
            </div>
            <div>
                <img className='max-w-2xl' loading='lazy' src="/9A74844B-5D4F-426C-BF10-8954F734D231_1_102_o.jpeg" alt="" />
            </div>

        </Carousel>
    
    </div>
  )
}

export default Slideshow