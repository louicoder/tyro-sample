import React from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const profile = (props) => {
	// console.log('testing wrapper')
	const profile =
		props.id.length > 0 ? (
			props.faces.map(
				(face) =>
					face.login.uuid === props.id ? (
						<React.Fragment key={face.login.uuid}>
							<img src={face.picture.large} alt="profile" />
							<h2>{props.name}</h2>
							<hr />
							<p>Email: {face.email}</p>
							<p>State: {face.location.state}</p>
							<p>Phone: {face.phone}</p>

							<button onClick={props.deleteProfile}>Remove Profile</button>
						</React.Fragment>
					) : null
			)
		) 
		: <div><h2>Click on any profile to view.</h2></div>;

	return (
		<>
			{profile}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		faces: state.faces.faces
	};
};

export default connect(mapStateToProps)(profile);
