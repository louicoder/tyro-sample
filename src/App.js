import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './Containers/MainPage/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

class App extends Component {
	render () {
		return (
			<React.Fragment>
				<NavBar />
				<BrowserRouter>
					<Switch>
						<Route path="/faces/:id" component={MainPage} />
						<Route path="/faces" component={MainPage} />
						<Route path="/" component={MainPage} />
					</Switch>
				</BrowserRouter>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
