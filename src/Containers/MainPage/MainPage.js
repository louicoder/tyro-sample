import React, { Component } from 'react';
import classes from './MainPage.css';
import FacesList from '../../Components/FacesList/FacesList'

class MainPage extends Component {
	state = {
		name: ''
	};

	nameChangedHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    componentDidMount () {
        
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
						<FacesList />
					</div>
				</div>
				<div className={classes.fullProfile} />
			</div>
		);
	}
}

export default MainPage;
