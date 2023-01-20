import React from 'react'
import Spline from '@splinetool/react-spline';

function Showroom() {
  return (
    <div className='flex bg-header_color mr-10 w-full h-full' 
      style={{
        contain:'content',
        

    
    }}>
       
        <Spline loading="lazy"
          className='spline showroom mt-20 w-full h-full '
          style={{
            
            contain:'content',
        
        
    
            
          }}
          scene="https://prod.spline.design/blEv1wyPtvKQDG0r/scene.splinecode" 
          />
    </div>
  )
}

export default Showroom