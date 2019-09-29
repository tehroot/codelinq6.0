import React from 'react';

import ResultCard from './ResultCard';

function Results() {

	return(
		<div>
			This is the container.
			<ResultCard title="The Servant Center" addressline="123 Elm St, Greensboro, NC 27401"
				shortdesc="Lorem impsum." />
		</div>
	);
}

export default Results;