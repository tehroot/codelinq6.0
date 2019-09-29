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

	const [state, setState] = useState({carddata: [], tags: {enabled: [{id: 1, text: 'tag 1'}, {id: 2, text: 'tag 2'}], disabled: []}, state: ''});

	var AWS = require('aws-sdk');
	AWS.config.accessKeyId = 'AKIA5QZNTKY2LZLBOOKM';
	AWS.config.secretAccessKey = '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';
	AWS.config.region = 'us-east-1';
	
		var docClient = new AWS.DynamoDB.DocumentClient();
		var query = (statecode) => {
			var setstatecode = ''
			if (statecode) {
				setstatecode = statecode;
			}
			else {
				setstatecode = state.state
			};

			var params = {
				TableName : "codelinc",
				KeyConditionExpression: "#st = :st",
				ExpressionAttributeNames: {
					"#st": "State"
				},
				ExpressionAttributeValues: {
					":st": setstatecode
				}
			};
			
			docClient.query(params, function(err, data) {
				if (err) {
					console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
				} else {
					console.log("Query succeeded.");
					setState({...state,state: setstatecode, carddata: data.Items});
					console.log(data.Items)
				}
			});
		}

	const enabletag = (id) => {
		var newEnabled = state.tags.enabled;
		newEnabled.push(state.tags.disabled[state.tags.disabled.findIndex((element) => {
			return element.id === id;
		})]);

		var newDisabled = state.tags.disabled.filter((element) => {
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
		
		setState({...state, tags: {enabled: newEnabled, disabled: newDisabled}});
	};

	const disabletag = (id) => {
		var newDisabled = state.tags.disabled;
		newDisabled.push(state.tags.enabled[state.tags.enabled.findIndex((element) => {
			return element.id === id;
		})]);

		var newEnabled = state.tags.enabled.filter((element) => {
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
		
		setState({...state, tags: {enabled: newEnabled, disabled: newDisabled}});

	};

	return(
		<div>
			<TagDrawer state={state} setState={setState} enabledtags={state.tags.enabled} disabledtags={state.tags.disabled} enabletag={enabletag} disabletag={disabletag} query={query} />
			<div className={classes.content}>
				{state.state && <Results state={state} carddata={state.carddata} />}
			</div>
		</div>
	);
}

export default Search;