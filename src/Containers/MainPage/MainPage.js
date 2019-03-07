import React, { Component } from 'react';
import classes from './MainPage.css';
import FacesList from '../../Components/FacesList/FacesList';
import { connect } from 'react-redux';
import {getFaces} from '../../store/actions/facesActionsCreators';
// import Profile from '../../Components/Profle/Profile'

class MainPage extends Component {
	state = {
        name: '',
        param: '',
        faces: []
	};

	nameChangedHandler = (event) => {
        this.setState({
            name: event.target.value,
            faces: this.state.faces.filter(person => {
                return person.name.first.indexOf(event.target.value) !== -1
            })
        })
    };

    componentDidMount () {
        this.props.getFaces();
        this.setState({
            param: this.props.match.params.id,
            faces: this.props.faces
        })
    }

    selectedPerson = (person) => {
        // console.log('here');
    }

	render () {
        // console.log(this.props)
        // const id = this.props.match.params.id;
        // let profile = null;

        

        // if (this.props.match.params.id !== 'undefined' && this.props.faces.length > 0) {
        //     // const match = this.props.faces.filter(person => {
        //     //     return person.login.uuid === this.props.match.params.id
        //     // })
        //     // console.log(match)
        //     // const imageUrl = match.picture.large;
        //     profile = (
        //         <div className={classes.fullProfile}>
        //             <img src="google" alt="profile"/>
        //             <p>{this.props.match.params.id}</p>
        //         </div>
        //     )
        // }

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
				{/* {profile} */}
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
