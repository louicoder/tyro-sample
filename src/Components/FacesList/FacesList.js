import React from 'react';
import classes from './FacesList.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class FacesList extends React.Component {
	
	selectedPerson = (person) => {
		this.props.history.push('/faces/' + person.login.uuid);
	};

	render () {
		return (
			<div className={classes.container}>
				{this.props.data.map((person) => (
					<div
						className={classes.singleFace}
						key={person.login.uuid}
						onClick={() => this.selectedPerson(person)}
					>
						<div className={classes.image}>
							<img src={person.picture.medium} alt="profile" />
						</div>
						<div className={classes.faceInfo}>
							<p>Name: {person.name.first + ' ' + person.name.last}</p>
							<p>Email: <span>{person.email}</span></p>
							<p>State: {person.location.state}</p>
							<p>Phone: {person.phone}</p>
							
						</div>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		faces: state.faces.faces
	};
};

export default connect(mapStateToProps)(withRouter(FacesList));
