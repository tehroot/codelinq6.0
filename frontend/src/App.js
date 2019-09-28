import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import muiTheme from './theme/muiTheme.js';

import Bar from './shell/Bar';

function App() {
	return (
		<ThemeProvider theme={muiTheme}>
			<div className="App">
				<Bar />
			</div>
		</ThemeProvider>
	);
}

export default App;
