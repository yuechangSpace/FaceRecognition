import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import Logo from '../components/Logo/Logo.js';
import TakePic from '../components/TakePic/TakePic.js';
import ImgLinkForm from '../components/ImgLinkForm/ImgLinkForm.js';
import Image from '../components/Image/Image.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import 'tachyons';
import './App.css'

//copy your api key here
const app = new Clarifai.App({
 apiKey: 'd6eea73651224ec8b4892e677d7a4f52'
});
const particleParams = {
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	};

class App extends Component{
	constructor(){
		super()
		this.state={
			url:'',
			box:[],
			route:'home',
			pic:{}
		}
	}

	onButtonTakePic = () => {
		this.setState({route:'takingpic'})
		console.log("taking")
	}

	onButtonFinishPic = (Obj) =>{
		this.setState({pic:Obj})
		this.setState({route:'home'})
		this.setState({url:Obj.base64})
		console.log(this.state.url)
	}

	calculateBoxPos = ({top_row,left_col,bottom_row,right_col})=>{
		const img = document.querySelector('.inputImg');
		const width = Number(img.width);
		const height = Number(img.height);
		//[41.32348785, 98.848272, 165.080531, 191.816391]
		// console.log([top_row*height, left_col*width, bottom_row*height, right_col*width])
		return [top_row*height, 
		left_col*width, 
		height - bottom_row*height, 
		width - right_col*width];
	}

	onButtonSubmit = () => {
			let uri = this.state.url;
			//handle the pic took from the user
			if (uri.includes("base64")){
				uri = uri.substring(22);
			}
	      	app.models.predict("a403429f2ddf4b49b307e318f00e528b", uri)
	        .then(response => {
	        //regions has two array
	        //{top_row: 0.110837825, left_col: 0.30422476, bottom_row: 0.48536083, right_col: 0.47590622}
	        const res = this.calculateBoxPos(response.outputs[0].data.regions[0].region_info.bounding_box)
	        this.displayBox(res);
	        })
	        .catch(err => {
	          console.log(err);
	        });
	  }

	displayBox = (box_arr) =>{
		this.setState({box:box_arr})
	}
	onInput= (event) => {
		this.setState({url:event.target.value})
	}

  render(){
  	console.log(this.state.pic)
  	return(
  		<div>{
  			(this.state.route === 'takingpic')
  			?<TakePic onButtonFinishPic={this.onButtonFinishPic}/>
  			:(this.state.route === 'home')
  			?(
  			<div>
	  			<Particles className='particles' params={particleParams} />
		    	<Navigation />
		    	<Logo className='particles'/>
		    	<h1 className='center'> Smart Brain </h1>
		    	<ImgLinkForm onButtonTakePic={this.onButtonTakePic} onInput={this.onInput} onButtonSubmit={this.onButtonSubmit}/>
		    	<Image boundingBox={this.state.box} url={this.state.url} />
	    	</div>
	    	)
	    	:<Image boundingBox={this.state.box} url={this.state.url} />
  		}

    </div>
    );
  }
}

export default App;
