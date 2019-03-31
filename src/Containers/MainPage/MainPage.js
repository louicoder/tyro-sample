import React, { Component } from 'react';
import classes from './MainPage.css';
import FacesList from '../../Components/FacesList/FacesList';
import { connect } from 'react-redux';
import { getFaces } from '../../store/actions/facesActionsCreators';
import Profile from '../../Components/Profile/Profile';

class MainPage extends Component {
	// WILL REPLACE COMPONENTWILLRECEIVEPROPS LIFECYCLE METHOD LATER.
	// static getDerivedStateFromProps (props, state) {
	// 	if (state.facesCopy !== props.faces) {
	// 		return {
	// 			facesCopy: props.faces
	// 		};
	// 	}
	// }

	state = {
		searchTerm: '',
		name: '',
		userId: '',
		uuid: '',
		picture: '',
		email: '',
		state: '',
		phone: '',
		facesCopy: [],
		loading: false
	};

	/**
     * handles input change in the search names input box
     * @params {Event}
     * @returns {newState}
     */
	nameChangedHandler = (event) => {
		const faces = this.props.faces.filter((face) => {
			return (
				face.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
				face.name.last.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
			);
		});

		this.setState({
			searchTerm: event.target.value,
			facesCopy: faces
		});
	};

	/**
	 * function sets new state and navigates to new URL
	 * @param {id} String
	 * @returns {void}
	 */
	deleteProfileHandler = () => {
		const newCopy = this.props.faces.filter((face) => {
			return face.login.uuid !== this.state.userId;
		});
		this.setState({
			facesCopy: newCopy,
			userId: ''
		});
		this.props.history.push('/');
	};

	/**
	 * function handles getFaces side Effect. Fetching new faces is done here.
	 * @returns {void}
	 */
	refreshHandler = () => {
		this.setState({ loading: true });

		this.props.getFaces();

		this.setState({
			loading: false
		});
	};

	/**
	 * function sets new profile data for s single person clicked.
	 * @param {Object} profileData
	 * @returns {void}
	 */
	selectedPerson = (profileData) => {
		// console.log('selected person function', profileData);

		this.setState({
			userId: profileData.login.uuid,
			name: profileData.name.first + ' ' + profileData.name.last,
			picture: profileData.picture.large,
			state: profileData.location.state,
			phone: profileData.phone,
			email: profileData.email
		});
	};

	componentWillReceiveProps (nextProps) {
		if (nextProps.faces !== this.props.faces) {
			this.setState({ facesCopy: nextProps.faces, id: this.props.match.params.id });
		}
	}

	componentDidUpdate (oldProps, oldState) {
		if (oldState.id !== this.props.match.params.id) {
			this.setState({ id: this.props.match.params.id });
		}
	}

	componentDidMount () {
		this.props.getFaces();
	}

	render () {
		// --- TODO ---
		// loading state to be improved
		const facesList = this.state.loading ? (
			<div className={classes.loading}>Loading profiles please wait...</div>
		) : (
			<FacesList data={this.state.facesCopy} clicked={this.selectedPerson} />
		);

		return (
			<div className={classes.container}>
				<div className={classes.nameInputContainer}>
					<input
						type="text"
						value={this.state.searchTerm}
						placeholder="search through available profile"
						className={classes.nameInput}
						onChange={this.nameChangedHandler}
					/>
					<button onClick={this.refreshHandler} className={classes.refresh}>
						Refresh
					</button>
					<div className={classes.FacesList}>{facesList}</div>
				</div>

				<div className={classes.profileImage}>
					<Profile id={this.state.userId} deleteProfile={this.deleteProfileHandler} />
				</div>
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
