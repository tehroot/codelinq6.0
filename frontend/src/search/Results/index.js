import React from 'react';

import ResultCard from './ResultCard';

function Results() {

	return(
		<div>
			This is the container.
			<ResultCard title="The Servant Center" addressline="123 Elm St, Greensboro, NC 27401"
				shortdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				 />
		</div>
	);
}

export default Results;