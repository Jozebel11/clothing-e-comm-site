import React from 'react'
import Spline from '@splinetool/react-spline';

function Showroom() {
  return (
    <div className='flex from-current w-full h-full' 
      style={{
        contain:'content',
        backgroundColor:'#0F172A'

    
    }}>
       
        <Spline loading="lazy"
          className='spline ml-5 showroom mb-10 sm:ml-16 w-full h-full '
          style={{
            
            contain:'content',
        
        
    
            
          }}
          scene="https://prod.spline.design/blEv1wyPtvKQDG0r/scene.splinecode" 
          />
    </div>
  )
}

export default Showroom