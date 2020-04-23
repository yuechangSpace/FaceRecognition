import React from 'react';
import './Image.css'

const Image = ({url})=>{
	const width='100px';
	const height= '100px';
  return (
    <div className='center'>
    <img className='inputImg' width='300px' height='auto' alt = 'target' src={url} />
    <div className='bounding-box' style={{width:width, height:height}}></div>
    </div>
  );
}

export default Image;
