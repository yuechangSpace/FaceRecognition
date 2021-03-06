import React from 'react';
import './Image.css'

const Image = ({ boundingBox, url })=>{

  return (
    <div className='center'>
    	<div className='absolute'>
    		{(url.length!==0)?
    			<img className='inputImg' width='300px' height='auto' alt = 'target' src={url} />
    			:<div />
    		}
			{(boundingBox.length !=0)?
			<div className='bounding-box' style={{top:boundingBox[0], 
		    	left:boundingBox[1],
		    	bottom:boundingBox[2], 
		    	right:boundingBox[3]}}>
			</div>
			:<div />
			}
	    </div>
    </div>
  );
}

export default Image;
