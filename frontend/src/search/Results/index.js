import React, {useState, useEffect} from 'react';
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

function Results(props) {
	const classes = useStyles();

	var {carddata} = props;

	return(
		<React.Fragment>
		{carddata.map((card) => (
			<ResultCard title={card.title}
			addressline={card.addressline}
			phone={card.phone}
			email={card.email}
			tags={card.TypeTag}
			eligibility={card.eligibility}
			website={card.website}
			description={card.description}
			/>
		))}</React.Fragment>
	);
}

export default Results;