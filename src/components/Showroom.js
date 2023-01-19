import React from 'react'
import Spline from '@splinetool/react-spline';

function Showroom() {
  return (
    <div className='flex bg-header_color' 
      style={{
        contain:'content',
        width:'100%'

    
    }}>
        <div>
            <h2 className='ml-20 mt-20'
              style={{
                justifyContent:'center',
                alignContent:'center'

                
              }}>Welcome to CaRo</h2>
        </div>
        <Spline 
          className='spline showroom mt-20'
          style={{
            
            contain:'content',
            
            width:'100%'
        
    
            
          }}
          scene="https://prod.spline.design/blEv1wyPtvKQDG0r/scene.splinecode" 
          />
    </div>
  )
}

export default Showroom