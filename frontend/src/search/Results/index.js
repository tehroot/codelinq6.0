import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ResultCard from './ResultCard';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',

		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',

		marginTop: '20px'
	}
}));

function Results() {
	const classes = useStyles();

	return(
		<div className={classes.root}>
			<ResultCard title="The Servant Center" addressline="123 Elm St, Greensboro, NC 27401"
				shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				 />
		</div>
	);
}

export default Results;