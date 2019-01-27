import * as tf from '@tensorflow/tfjs';

let bills = require('../toInclude/bills/model.json');
let entertainment = require('../toInclude/entertainment/model.json');
let food = require('../toInclude/food/model.json');
let groceries = require('../toInclude/groceries/model.json');
let miscellaneous = require('../toInclude/miscellaneous/model.json');
let income = require('../toInclude/income/model.json');


export async function getPredictions(data, model) {
	var m
	switch (model) {
		case 'bills':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/bills/model.json';
			break;
		case 'entertainment':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/bills/model.json';
			break;
		case 'food':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/bills/model.json';
			break;
		case 'groceries':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/bills/model.json';
			break;
		case 'miscellaneous':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/bills/model.json';
			break;
		case 'income':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/bills/model.json';
			break;
		default:
			m = ""
			break;
	}
	const tModel = await tf.loadModel(m)
	console.log(tModel.predict(data).dataSync())
	return  
}