import React, { Component } from 'react';
import classes from './MainPage.css';

class MainPage extends Component {
	state = {
		name: ''
	};

	nameChangedHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    };

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
					<div>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum
						</p>
					</div>
				</div>
				<div className={classes.fullProfile} />
			</div>
		);
	}
}

export default MainPage;
