import React from 'react';
import Tilt from 'react-tilt'
import img from './image.jpg'

const Logo = ()=>{
  return (
    <Tilt className="Tilt br2 shadow-5 pa1 ma3" options={{ max : 100 }} style={{ height: 130, width: 130,borderRadius: '30px'}} >
 	<div className="Tilt-inner"> <img width='130px'style={{borderRadius: '30px',}} alt = 'logo' src={img} /> </div>
	</Tilt>
  );
}

export default Logo;
