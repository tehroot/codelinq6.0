import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	chip: {
		margin: '5px',
		float: 'left'
	}
}));

function Tag(props) {
	const classes = useStyles();
	const { text, key, handleClick } = props;

	return(
		<div className={classes.root}>
			<Chip
			label={text}
			onClick={handleClick}
			className={classes.chip}
			/>
		</div>
	)
};

export default Tag;
