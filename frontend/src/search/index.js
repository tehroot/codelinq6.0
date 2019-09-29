import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TagDrawer from './TagDrawer';
import Results from './Results';

const useStyles = makeStyles(theme => ({
	content: {
		marginLeft: '300px'
	}
}));

function Search() {
	const classes = useStyles();

	const [state, setState] = useState({carddata: [], tags: {enabled: [], disabled: []}, state: ''});

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
		}

		var alldata = [];

		var params = {
			TableName : "codelinc",
			KeyConditionExpression: "#st = :st",
			ExpressionAttributeNames: {
				"#st": "State",
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
				alldata = data.Items;
				console.log(data.Items)

				var params = {
					TableName : "codelinc",
					KeyConditionExpression: "#st = :st",
					ExpressionAttributeNames: {
						"#st": "State",
					},
					ExpressionAttributeValues: {
						":st": "FED"
					}
				};
			
				docClient.query(params, function(err, data) {
					if (err) {
						console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
					} else {
						console.log("Query succeeded.");
						console.log(alldata = alldata.concat(data.Items))
						console.log(data.Items)

						alldata = [...new Set(alldata)];

						var tags = [];
						alldata.forEach((element) => {
							tags = tags.concat(element.TypeTag);
						});
						tags = [...new Set(tags)];

						setState({...state, tags: {enabled: tags, disabled: []}, state: setstatecode, carddata: alldata});
					}
				});
			}
		});
	}
	

	const enabletag = (tag) => {
		var newEnabled = state.tags.enabled;
		newEnabled.push(state.tags.disabled[state.tags.disabled.findIndex((element) => {
			return element === tag;
		})]);

		var newDisabled = state.tags.disabled.filter((element) => {
			return element !== tag;
		});
		
		setState({...state, tags: {enabled: newEnabled, disabled: newDisabled}});
	};

	const disabletag = (tag) => {
		var newDisabled = state.tags.disabled;
		newDisabled.push(state.tags.enabled[state.tags.enabled.findIndex((element) => {
			return element === tag;
		})]);

		var newEnabled = state.tags.enabled.filter((element) => {
			return element !== tag;
		});
		
		setState({...state, tags: {enabled: newEnabled, disabled: newDisabled}});

	};

	return(
		<div>
			<TagDrawer state={state} setState={setState} enabledtags={state.tags.enabled} disabledtags={state.tags.disabled} enabletag={enabletag} disabletag={disabletag} query={query} />
			<div className={classes.content}>
				{state.state && <Results state={state} carddata={state.carddata} tags={state.tags.enabled}/>}
			</div>
		</div>
	);
}

export default Search;