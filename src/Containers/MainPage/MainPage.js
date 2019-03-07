import React, { Component } from 'react';
import classes from './MainPage.css';
import FacesList from '../../Components/FacesList/FacesList';
import { connect } from 'react-redux';
import { getFaces } from '../../store/actions/facesActionsCreators';

class MainPage extends Component {
	state = {
		name: '',
		param: '',
		facesCopy: []
	};

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
			this.setState({ facesCopy: nextProps.faces });
		}
	}

	componentDidMount () {
		this.props.getFaces();
	}

	render () {
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
				<div className={classes.fullProfile}>
					<div className={classes.profileImage}>
						<img src="google" alt="profile" />
					</div>
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
