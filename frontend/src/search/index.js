import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TagDrawer from './TagDrawer';
import Results from './Results';

const useStyles = makeStyles(theme => ({
	content: {
		marginLeft: '300px'
	}
}));

function Search() {
	const classes = useStyles();

	return(
		<div>
			<TagDrawer />
			<div className={classes.content}>
				<Results />
			</div>
		</div>
	);
}

export default Search;