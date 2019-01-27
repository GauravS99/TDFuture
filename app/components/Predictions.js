import * as tf from '@tensorflow/tfjs';

let bills = require('../toInclude/bills/model.json');
let entertainment = require('../toInclude/entertainment/model.json');
let food = require('../toInclude/food/model.json');
let groceries = require('../toInclude/groceries/model.json');
let miscellaneous = require('../toInclude/miscellaneous/model.json');
let income = require('../toInclude/income/model.json');


export async function getPredictions(data, model) {
	const m
	switch (model) {
		case 'bills':
			m = '../toInclude/bills/model.json';
			break;
		case 'entertainment':
			m = '../toInclude/entertainment/model.json';
			break;
		case 'food':
			m = '../toInclude/food/model.json';
			break;
		case 'groceries':
			m = '../toInclude/groceries/model.json';
			break;
		case 'miscellaneous':
			m = '../toInclude/miscellaneous/model.json';
			break;
		case 'income':
			m = '../toInclude/income/model.json';
			break;
		
	}
    const tModel = await tf.loadModel(m)
	return prediction = model.predict(example);
}