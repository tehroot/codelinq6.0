import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ResultCard from './ResultCard';
import { Card } from '@material-ui/core';

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

function Results() {
	const classes = useStyles();

	const cardsarray = [
		{title: "The Servant Center",
		 addressline: "1312 Lexington Ave, Greensboro, NC 27403",
		 description: "Our mission is to empower the homeless and disabled, particularly veterans, to become independent, contributing members of our community through housing, healthcare and restorative services.",
		 phone: "+1 336 275 8585",
		 email: "info@theservantcenter.org",
		 secondary_tags: "housingtype_single",
		 eligibility: "Housing only available for singles.",
		 website: "https://theservantcenter.org"},
		{title: "Lifeline",
		 addressline: "Nationwide",
		 description: "The Lifeline Program enables wireless and wired phone and internet providers to provide discount service to low income Americans. This is a great way to get the connection you need for job and benefit applications and stay in touch with your families. Click Learn More to check eligibility.",
		 eligibility: "Qualify with low income, SNAP, or other benefits.",
		 website: "https://checklifeline.org"}
		]


	return(
		<div className={classes.root}>
			{cardsarray.map(card =>
				<ResultCard title={card.title}
				addressline={card.addressline}
				phone={card.phone}
				email={card.email}
				tags={card.secondary_tags}
				eligibility={card.eligibility}
				website={card.website}
				description={card.description}
				/>)}
		</div>
	);
}

export default Results;