import React from 'react';

import { ThemeProvider, makeStyles } from '@material-ui/styles';
import muiTheme from './theme/muiTheme.js';

import Shell from './shell';

import Search from './search';

const useStyles = makeStyles(theme => ({
	app: {
		display: 'flex',
		flexWrap: 'wrap',

		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',

		marginTop: '60px'
	}
}));

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={muiTheme}>
			<Shell />
			<div className={classes.app}>
				<Search />
			</div>
		</ThemeProvider>
	);
};

export default App;
