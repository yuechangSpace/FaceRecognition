import React from 'react';
import './Image.css'

const Image = ({ boundingBox, url })=>{
	const width='100px';
	const height= '100px';
  return (
    <div className='center'>
    	<div className='absolute'>
		    <img className='inputImg' width='300px' height='auto' alt = 'target' src={url} />
		    <div className='bounding-box' style={{top:boundingBox[0], 
		    	left:boundingBox[1],
		    	bottom:boundingBox[2], 
		    	right:boundingBox[3]}}>
		</div>
	    </div>
    </div>
  );
}

export default Image;
