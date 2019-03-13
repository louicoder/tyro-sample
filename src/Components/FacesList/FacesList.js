import React from 'react';
import classes from './FacesList.css';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';


const FacesList = (props) => {

	const selectedPerson = (profileId) => {
		props.history.push('/faces/' + profileId);
	};

	return (
		<div className={classes.container}>
			{props.data.map((person) => (
				<div
					className={classes.singleFace}
					key={person.login.uuid}
					onClick={() => selectedPerson(person.login.uuid)}
				>
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
