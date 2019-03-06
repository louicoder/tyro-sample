import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LandingPage from './Containers/LandingPage/LandingPage';
import MainPage from './Containers/MainPage/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'

class App extends Component {
	render () {
		return (
      <>
      <NavBar />
			<BrowserRouter>
				<Switch>
					<Route path="/faces" component={MainPage} />
					<Route path="/" component={LandingPage} />

					{/* <Route path="/" component={LandingPage}/> */}
				</Switch>
			</BrowserRouter>
      <Footer />
      </>
		);
	}
}

export default App;