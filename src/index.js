import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Chat from 'components/Chat'
import Lessons from 'components/Lessons'

import 'css/reset.css';
import 'css/index.module.css';

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Chat} />
			<Route exact path="/lessons" component={Lessons} />
			<Route path="/lessons/:week" component={Lessons} />
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
