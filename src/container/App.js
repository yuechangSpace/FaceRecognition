import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import Logo from '../components/Logo/Logo.js';
import ImgLinkForm from '../components/ImgLinkForm/ImgLinkForm.js';
import Image from '../components/Image/Image.js';
import 'tachyons';
import './App.css'
class App extends Component{
  render(){
  	return(
  		<div>
	    	<Navigation />
	    	<Logo />
	    	<h1 className='center'> Smart Brain </h1>
	    	<ImgLinkForm />
	    	<Image />
		{/*	
		
		<h1> Smart Brain </h1>
	    <ImgLinkForm />
	    <Image />*/}
    </div>
    );
  }
}

export default App;
