import React from 'react';
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
	var {carddata, tags} = props;

	const intersect = (a, b) => {
		var filtered = a.filter((n) => {
			return b.indexOf(n) > -1;
		});
		if (filtered.length > 0) {
			return true;
		} else {
			return false;
		}
	}

	return(
		<div className={classes.root}>
			{carddata.map((card) => {
				if (intersect(card.TypeTag, tags)) {
					return(
						<ResultCard title={card.title}
						addressline={card.addressline}
						phone={card.phone}
						email={card.email}
						tags={card.TypeTag}
						eligibility={card.eligibility}
						website={card.website}
						description={card.description}
						/>
					)
				} else {
					return(
						<React.Fragment />
					)
				}
			})}
		</div>
	);
}

export default Results;