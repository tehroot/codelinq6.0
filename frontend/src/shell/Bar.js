import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import 'typeface-zilla-slab';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	bar: {
		background: theme.palette.bar.main
	},
	title: {
		fontFamily: "Zilla Slab",
		fontSize: "20pt",
		paddingBottom: "5px"
	}
}));

function Bar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.bar} position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						NarrowDown
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Bar;
