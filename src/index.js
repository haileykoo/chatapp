import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import People from 'components/People';
import Chat from 'components/Chat';

import 'css/index.css';

const App = () => {
	return (
		<Router>
			<Route exact path="/chat" component={Chat} />
			{/* <Route exact path="/chat" component={Chat} /> */}
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

