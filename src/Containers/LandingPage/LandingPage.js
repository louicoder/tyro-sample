import React, { Component } from 'react';
import Login from '../../Components/Login/Login';
import classes from './LandingPage.css'

class LandingPage extends Component {
	render () {
		return (
			<div className={classes.louis}>
				<Login />
			</div>
		);
	}
}

export default LandingPage;
