import React from 'react';

import TagDrawer from './TagDrawer';
import Results from './Results';

function Search() {

	return(
		<React.Fragment>
			<TagDrawer />
			<Results />
		</React.Fragment>
	);
}

export default Search;