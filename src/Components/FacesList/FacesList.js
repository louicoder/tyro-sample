import React, { useState, useEffect } from 'react';
import classes from './FacesList.css';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

const FacesList = (props) => {
	// react hook data initial state as well as function to set new data in state.
	const [ data, setData ] = useState([]);

	// commented set states below to be used later on after figuring out a bug being experienced.
	// const [ idState, setId ] = useState('');
	// const [ nameState, setName ] = useState('');
	// const [ pictureState, setPicture ] = useState('');
	// const [ stateState, setState ] = useState('');
	// const [ emailState, setEmail ] = useState('');
	// const [ phoneState, setPhone ] = useState('');

	/**
	 * React hook used to set initial state of data. 
	 * @returns {void}
	 */
	useEffect(() => {
		setData(props.data);
	});

	/**
	 * function sends profile data ojbect to selectedPerson function MainPage  
	 * @param {object} profile
	 * @returns {void}
	 */
	const sendPersonProfile = (profile) => {
		// console.log('facelist profile', profile);
		props.clicked(profile);
	};

	return (
		<div className={classes.container}>
			{data.map((person) => (
				<div className={classes.singleFace} key={person.login.uuid} onClick={() => sendPersonProfile(person)}>
					<div className={classes.image}>
						<img src={person.picture.medium} alt="profile" />
					</div>
					<div className={classes.faceInfo}>
						<p>Name: {person.name.first + ' ' + person.name.last}</p>
						<p>
							Email: <span>{person.email}</span>
						</p>
						<p>State: {person.location.state}</p>
						<p>Phone: {person.phone}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default withRouter(FacesList);
