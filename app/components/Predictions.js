import * as tf from '@tensorflow/tfjs';

export async function getPredictions(data, model) {
	var m
	switch (model) {
		case 'bills':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/bills/model.json';
			break;
		case 'entertainment':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/entertainment/model.json';
			break;
		case 'food':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/food/model.json';
			break;
		case 'groceries':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/groceries/model.json';
			break;
		case 'miscellaneous':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/miscellaneous/model.json';
			break;
		case 'income':
			m = 'https://raw.githubusercontent.com/GauravS99/TDFuture/master/app/toInclude/income/model.json';
			break;
		default:
			m = ""
			break;
	}
	const tModel = await tf.loadModel(m)
	console.log(tModel.predict(data).dataSync())
	return  
}