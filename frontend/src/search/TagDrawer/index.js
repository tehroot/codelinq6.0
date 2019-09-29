import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import Tag from './Tag';
import { Typography } from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const states = require('./states.json');

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
		padding: '10px'
	},
	tagHeader: {
		marginTop: '15px'
	},
	stateSelect: {
		margin: '15px 25px 5px 25px'
	}
}));

function TagDrawer(props) {
	const classes = useStyles();
	const { state, setState, enabledtags, disabledtags, enabletag, disabletag, query } = props;
	
	const handleChange = event => {
		if (event.target.name === 'state') {
			query(event.target.value);
		} else {
			query();
		}
		setState(oldValues => ({
			...oldValues,
			[event.target.name]: event.target.value,
		}));
	};

	return(
		
			<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			>
				<Toolbar></Toolbar>

				<FormControl className={classes.stateSelect}>
					<Select
					value={state.state}
					onChange={handleChange}
					inputProps={{
						name: 'state',
						id: 'state',
					}}
					displayEmpty
					>
						<MenuItem value="" disabled>
							Select your state...
						</MenuItem>
						{states.map((element) => {
							return(<MenuItem value={element.id}>{element.name}</MenuItem>)
						})}
					</Select>
				</FormControl>

				<Typography className={classes.tagHeader} variant="h6">Enabled Filters</Typography>
				<div className={classes.tagWrapper}>
					{enabledtags.map(tag =>
						<Tag text={tag.text} handleClick={() => {disabletag(tag.id)}}/>
					)}
				</div>
				<Divider className={classes.tagHeader} />
				<Typography className={classes.tagHeader} variant="h6">Disabled Filters</Typography>
				<div className={classes.tagWrapper}>
					{disabledtags.map(tag =>
						<Tag text={tag.text} handleClick={() => {enabletag(tag.id)}}/>
					)}
				</div>
			</Drawer>
	);
};

export default TagDrawer;