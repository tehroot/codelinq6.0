import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import Tag from './Tag';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
}));

function TagDrawer() {
	const classes = useStyles();

	return(
		
			<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			>
				<Toolbar></Toolbar>
				<Tag text="testing tags" handleClick={() => {alert('test')}}/>
				<Divider />
			</Drawer>
	);
};

export default TagDrawer;