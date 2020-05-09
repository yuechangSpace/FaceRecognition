import React, { Component } from 'react';

class Profile extends Component{
	render(){
		return <div id='hello'>
				Hello <b>{this.props.user.name}</b> thanks for your <b>{this.props.user.entries}th</b> entry!
			</div>;
	}
}
export default Profile;
