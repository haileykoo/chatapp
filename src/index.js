import React from 'react';
import ReactDOM from 'react-dom';
import People from 'components/People';
import Chat from 'components/Chat';
import 'css/index.css';

const App = () => {
	return (
		<>
		<div class="people-list" id="people-list">
			<div class="container clearfix">
				<People name="People" />
			</div>

			<div class="chat">
				<Chat />
			</div>
		</div>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
