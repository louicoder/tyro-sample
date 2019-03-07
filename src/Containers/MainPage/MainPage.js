import React, { Component } from 'react';
import classes from './MainPage.css';
import FacesList from '../../Components/FacesList/FacesList';
import { connect } from 'react-redux';
import { getFaces } from '../../store/actions/facesActionsCreators';

class MainPage extends Component {
	state = {
		name: '',
		id: '',
		facesCopy: []
	};

	/**
     * handles input change in the search names input box
     * @params {Event}
     * @returns {newState}
     */
	nameChangedHandler = (event) => {
		const faces = this.props.faces.filter((face) => {
			return face.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
		});
		this.setState({
			name: event.target.value,
			facesCopy: faces
		});
	};

	componentWillReceiveProps (nextProps) {
		if (nextProps.faces !== this.props.faces) {
			this.setState({ facesCopy: nextProps.faces, id: this.props.match.params.id });
		}
		// console.log(this.props.match.params.id);
	}

	componentDidUpdate (oldProps, oldState) {
		if (oldState.id !== this.props.match.params.id) {
			this.setState({ id: this.props.match.params.id });
		}
		// console.log('props didupdate',oldProps, 'oldstate', oldState)
	}

	componentDidMount () {
		this.props.getFaces();
	}

	render () {
		let profile = null;

		if (this.state.id) {
			const img = this.props.faces.map((face) => {
				if (face.login.uuid === this.state.id) {
					profile = (
						<div className={classes.profileImage}>
							<img src={face.picture.large} alt="profile" />
							<h2>{face.name.first + " "+face.name.last}</h2><hr/>
							<p>Email: {face.email}</p>
							<p>State: {face.location.state}</p>
							<p>Phone: {face.phone}</p>

							<button>Remove Profile</button>
						</div>
					);
				}
			});
		}

		return (
			<div className={classes.container}>
				<div className={classes.nameInputContainer}>
					<input
						type="text"
						value={this.state.name}
						placeholder="search through available profiles"
						className={classes.nameInput}
						onChange={this.nameChangedHandler}
					/>
					<div className={classes.FacesList}>
						<FacesList data={this.state.facesCopy} clicked={this.selectedPerson} />
					</div>
				</div>
				{profile}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		faces: state.faces.faces
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getFaces: () => dispatch(getFaces())
		// filterFaces: (name) => dispatch({type: 'FILTER_FACES', name: name})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
