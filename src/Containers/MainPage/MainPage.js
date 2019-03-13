import React, { Component } from 'react';
import classes from './MainPage.css';
import FacesList from '../../Components/FacesList/FacesList';
import { connect } from 'react-redux';
import { getFaces } from '../../store/actions/facesActionsCreators';

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
		name: '',
		id: '',
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
			return (face.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 || face.name.last.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) ;
		});
		this.setState({
			name: event.target.value,
			facesCopy: faces
		});
	};

	deleteProfileHandler = (id) => {
		const newCopy = this.props.faces.filter(face => {
			return face.login.uuid !== id
		})
		this.setState({
			facesCopy: newCopy,
			id: ""
		})
		this.props.history.push('/')
	}

	refreshHandler = () => {
		this.setState({loading: true})

		this.props.getFaces()

		this.setState({
			loading: false
		})

	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.faces !== this.props.faces) {
			this.setState({ facesCopy: nextProps.faces, id: this.props.match.params.id });
		}
	}

	// shouldComponentUpdate(nextProps,nextState) {
	// 	let update = false;
	// 	// let shouldUpdate = this.state.facesCopy !== nextState.facesCopy;
	// 	if (this.state.facesCopy !== nextProps.faces) {
	// 		update = true;
	// 	}
	// 	return update;
	//   }

	componentDidUpdate (oldProps, oldState) {
		if (oldState.id !== this.props.match.params.id) {
			this.setState({ id: this.props.match.params.id });
		}
	}

	componentDidMount () {
		this.props.getFaces();
	}

	render () {
		const facesList = !this.props.faces.length > 0 ? 
							<div className={classes.loading}>Loading profiles please wait...</div> : 
							<FacesList data={this.state.facesCopy} clicked={this.selectedPerson} />
							

		let profile = !this.state.id ? <div className={classes.profileAlt}>Click on a profile to view</div> : null;

		if (this.state.id) {
			profile = this.state.facesCopy.map((face) => {
				return face.login.uuid === this.state.id ?
					(
						<React.Fragment key={face.login.uuid}>
							<img src={face.picture.large} alt="profile" />
							<h2>{face.name.first + ' ' + face.name.last}</h2>
							<hr />
							<p>Email: {face.email}</p>
							<p>State: {face.location.state}</p>
							<p>Phone: {face.phone}</p>

							<button onClick={() =>this.deleteProfileHandler(face.login.uuid)}>Remove Profile</button>
						</React.Fragment>) : null;
					
				
			});
		}

		return (
			<div className={classes.container}>
				<div className={classes.nameInputContainer}>
					<input
						type="text"
						value={this.state.name}
						placeholder="search through available profile"
						className={classes.nameInput}
						onChange={this.nameChangedHandler}
					/>
					<button onClick={this.refreshHandler} className={classes.refresh}>Refresh</button>
					<div className={classes.FacesList}>
						{facesList}
					</div>
				</div>
				<div className={classes.profileImage}>
				{profile}
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
