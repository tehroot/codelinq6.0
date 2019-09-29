import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import Tag from './Tag';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
}));

function TagDrawer() {
	const classes = useStyles();

	return(
		<div className={classes.root}>
			<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			>
				<Toolbar></Toolbar>
				<Tag text="Hello world my dude" handleClick={() => {alert('test')}}/>
				<Divider />
			</Drawer>
		</div>
	);
};

export default TagDrawer;