import React from 'react';

const profile = (props) => {
	return (
		<React.Fragment key={props.id}>
			<img src={props.picture} alt="profile" />
			<h2>{props.name}</h2>
			<hr />
			<p>Email: {props.email}</p>
			<p>State: {props.state}</p>
			<p>Phone: {props.phone}</p>

			<button onClick={props.deleteProfile}>Remove Profile</button>
		</React.Fragment>
	);
};

export default profile;
