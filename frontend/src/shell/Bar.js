import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import { Typography, Button } from '@material-ui/core';

import 'typeface-zilla-slab';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	bar: {
		background: theme.palette.bar.main,
		zIndex: theme.zIndex.drawer + 1
	},
	title: {
		flexGrow: 1,
		fontFamily: "Zilla Slab",
		fontSize: "20pt",
		paddingBottom: "5px"
	},
	navButton: {
		margin: '5px'
	},
	navButtonText: {
		color: 'white'
	}
}));

function Bar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.bar} position="absolute">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						NarrowDown
					</Typography>
					<Button className={classes.navButton}><Typography className={classes.navButtonText} variant="h6">Home</Typography></Button>
					<Button className={classes.navButton}><Typography className={classes.navButtonText} variant="h6">About</Typography></Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Bar;
