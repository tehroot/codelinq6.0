import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
	card: {
		margin: '20px',
		minWidth: 300,
		maxWidth: 300,
	},

	formControl: {
		minWidth: 200,
	},
});

function Questionaire() {
	const classes = useStyles();

	const [values, setValues] = React.useState({
		state: ''
	});
	
	const handleChange = event => {
		setValues(oldValues => ({ ...oldValues, [event.target.name]: event.target.value }));
	};

	return(
		<Card className={classes.card}>
			<CardContent>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="state">State</InputLabel>
					<Select
					value={values.state}
					onChange={handleChange}
					inputProps={{
						name: 'state',
						id: 'state',
					}}
					>
						<MenuItem value={'nc'}>North Carolina</MenuItem>
						<MenuItem value={'pa'}>Pennsylvania</MenuItem>
					</Select>
					<FormHelperText>Select your state</FormHelperText>
				</FormControl>
			</CardContent>
		</Card>
	);
};

export default Questionaire;