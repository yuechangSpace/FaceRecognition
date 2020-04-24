import React from 'react';
import './ImgLinkForm.css'

const ImgLinkForm = ({onButtonTakePic, onInput , onButtonSubmit})=>{
  return (
    <div className=''>
    	<p className='center'>Please type in the image URL that you want to detect</p>
    	<hr />
    	<div className='center shadow-2 pv3 ma1 br3 w-50' >
        <button onClick={onButtonTakePic} className='w-15 dib grow white bg-light-purple br2 ba b--light-purple'>Take a photo</button>
        <p className='f6 m5 ph2'>Or Copy a URL</p>
	    	<input onInput={onInput} type='text'className = 'w-70  bw2' ></input>
	    	<button onClick={onButtonSubmit} className='w-15 dib grow white bg-light-purple ph3 br2 ba b--light-purple'>Detect</button>
	    </div>
    </div>
  );
}

export default ImgLinkForm;
