import React from 'react';
import './ImgLinkForm.css'

const ImgLinkForm = ()=>{
  return (
    <div >
    	<p className='center'>Please type in the image URL that you want to detect</p>
    	<hr />
    	<div className='center'>
	    	<input type='text' ></input>
	    	<button className=''>Detect</button>
	    </div>
    </div>
  );
}

export default ImgLinkForm;
