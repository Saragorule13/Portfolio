import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="w-full h-full border">
      <div className="relative w-full h-full">
        
        <Spline 
          scene="https://prod.spline.design/qH-L-NI9LWskTMnG/scene.splinecode" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}

export default Hero;
