import React from 'react';
import classes from './NavBar.css'

const NavBar = (props) => {
	return (
		<div>
			<div className={classes.LandingNav}>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
