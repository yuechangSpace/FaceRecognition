import React from 'react';


const Navigation = ({onButtonNav, route})=>{
	let signInNOut;
	if (route === 'signedin'){
		signInNOut = <p onClick={()=>onButtonNav('home')} className='grow mh3'>Sign Out </p>
	}else{
		signInNOut = <p onClick={()=>onButtonNav('signin')} className='grow mh3'>Sign In </p>
	}

	return (
		<nav  className='ma1 pa2 pointer end'>
		<p onClick={()=>onButtonNav('register')} className='grow mh3'>Register</p>
		{signInNOut}
		</nav>
		);
}

export default Navigation;
