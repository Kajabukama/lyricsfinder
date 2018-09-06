import React, { Component } from 'react';
import Navbar from './Components/Layouts/Navbar'
import './App.css';
import Routes from './routes';
import { Provider } from './context';

class App extends Component {
	render() {
	return (
		<Provider>
			<React.Fragment>
				<Navbar/>
				<div className="container">
					<Routes/>
				</div>
			</React.Fragment>
		</Provider>
		);
	}
}

export default App;
