import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import Tag from './Tag';
import { Typography } from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	tagWrapper: {
		display: 'flex',
		flex: 'wrap',
		padding: '5px'
	},
	tagHeader: {
		marginTop: '15px'
	}
}));

function TagDrawer(props) {
	const classes = useStyles();

	const { enabledtags, disabledtags, enabletag, disabletag } = props;

	return(
		
			<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			>
				<Toolbar></Toolbar>
				<Typography className={classes.tagHeader} variant="h6">Enabled Tags</Typography>
				<div className={classes.tagWrapper}>
					{enabledtags.map(tag =>
						<Tag text={tag.text} handleClick={() => {disabletag(tag.id)}}/>
					)}
				</div>
				<Divider className={classes.tagHeader} />
				<Typography className={classes.tagHeader} variant="h6">Disabled Tags</Typography>
				<div className={classes.tagWrapper}>
					{disabledtags.map(tag =>
						<Tag text={tag.text} handleClick={() => {enabletag(tag.id)}}/>
					)}
				</div>
			</Drawer>
	);
};

export default TagDrawer;