import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TagDrawer from './TagDrawer';
import Results from './Results';

const useStyles = makeStyles(theme => ({
	content: {
		marginLeft: '300px'
	}
}));

const newtags = [{id: 1, text: 'tag 1'}, {id: 2, text: 'tag 2'}, {id: 3, text: 'tag 3'}, {id: 4, text: 'tag 4'}]

function Search() {
	const classes = useStyles();
	const [tags, setTags] = useState({enabled: [{id: 1, text: 'tag 1'}, {id: 2, text: 'tag 2'}], disabled: []});

	const enabletag = (id) => {
		var newEnabled = tags.enabled;
		newEnabled.push(tags.disabled[tags.disabled.findIndex((element) => {
			return element.id === id;
		})]);

		var newDisabled = tags.disabled.filter((element) => {
			return element.id !== id;
		});

		newEnabled.filter((element) => {
			return newtags.includes(element);
		});
		newDisabled.filter((element) => {
			return newtags.includes(element);
		});

		var appendTags = [];

		newtags.forEach((element1) => {
			var test1 = newDisabled.filter((element2) => {
				return element1.id === element2.id;
			});
			if (test1.length === 0) {
				var test2 = newEnabled.filter((element2) => {
					return element1.id === element2.id;
				});
				if (test2.length === 0) {
					appendTags.push(element1);
				};
			};
		});

		newDisabled = newDisabled.concat(appendTags);
		
		setTags({enabled: newEnabled, disabled: newDisabled});
	};

	const disabletag = (id) => {
		var newDisabled = tags.disabled;
		newDisabled.push(tags.enabled[tags.enabled.findIndex((element) => {
			return element.id === id;
		})]);

		var newEnabled = tags.enabled.filter((element) => {
			return element.id !== id;
		});

		newEnabled.filter((element) => {
			return newtags.includes(element);
		});
		newDisabled.filter((element) => {
			return newtags.includes(element);
		});

		var appendTags = [];

		newtags.forEach((element1) => {
			var test1 = newDisabled.filter((element2) => {
				return element1.id === element2.id;
			});
			if (test1.length === 0) {
				var test2 = newEnabled.filter((element2) => {
					return element1.id === element2.id;
				});
				if (test2.length === 0) {
					appendTags.push(element1);
				};
			};
		});

		newDisabled = newDisabled.concat(appendTags);
		
		setTags({enabled: newEnabled, disabled: newDisabled});
	};

	return(
		<div>
			<TagDrawer enabledtags={tags.enabled} disabledtags={tags.disabled} enabletag={enabletag} disabletag={disabletag} />
			<div className={classes.content}>
				<Results />
			</div>
		</div>
	);
}

export default Search;