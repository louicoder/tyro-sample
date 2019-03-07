import React, { Component } from 'react';
import classes from './MainPage.css';
import FacesList from '../../Components/FacesList/FacesList';
import { connect } from 'react-redux';
import {getFaces} from '../../store/actions/facesActionsCreators';
import Profile from '../../Components/Profle/Profile'

class MainPage extends Component {
	state = {
        name: '',
        param: '',
        faces: this.props.faces
	};

	nameChangedHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    componentDidMount () {
        this.props.getFaces();
        this.setState({
            param: this.props.match.params.id
        })

        // console.log('param',this.state.param)
    }

    selectedPerson = (person) => {
        // console.log('here');
    }

	render () {
        // console.log(this.props.match.params.id)
        const match = this.props.faces.filter(person => {
            return person.login.uuid === this.props.match.params.id;
        })
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
						<FacesList data={this.props.faces} clicked={this.selectedPerson}/>
					</div>
				</div>
				<div className={classes.fullProfile}>
                    <Profile data={this.props.faces}/>
                </div>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        faces: state.faces.faces
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFaces: () => dispatch(getFaces())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
