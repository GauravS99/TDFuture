import React from 'react';
import {Sidebar} from './Sidebar'
import * as tf from '@tensorflow/tfjs';


import {TitleBar} from './TitleBar'
import {Accounts} from './Accounts'
import {HintBox} from './HintBox'
import {Graph} from './Graph'
import {CategoryChart} from './CategoryChart'
import {Grid, Row, Col} from 'react-bootstrap'

import {getPredictions} from './Predictions'

export class App extends React.Component{
 
     constructor(props){
     	super(props);
        let st = { bills: {name: "Bills", months: []},
                   billsp: [],
                   income: { name: "Income", months: []},
                   incomep: [],
                   miscellaneous: { name: "Miscellaneous", months: []},
                   miscellaneousp: [],
                   food: {name: "Food", months: []},
                   foodp: [],
                   groceries: { name: "Groceries", months: []},
                   groceriesp: [],
                   entertainment: { name: "Entertainment", months: []},
                   entertainmentp: [],
                   finished: 0
               };
        this.state = st;
     }

    componentDidMount() {	
	 this.onRefresh();
	 };

   onRefresh(){
	var bills = generateRandomData(5000, 0, 0, 0, 0);
	var income = generateRandomData(7000, 100, 0, 2, 3);
	var miscellaneous = generateRandomData(200, 20, 15, 3, 5);
	var food = generateRandomData(120, 30, 10, 4, 8);
	var groceries = generateRandomData(400, 30, 10, 5, 10);
	var entertainment = generateRandomData(50, 20, 4, 3, 5);
    let st =   { bills: {name: "Bills", months: bills}, 
    			  income: { name: "Income", months: income},
                  miscellaneous: { name: "Miscellaneous", months: miscellaneous},
                  food: {name: "Food", months: food},
                  groceries: { name: "Groceries", months: groceries},
                  entertainment: { name: "Entertainment", months: entertainment}
              };
	this.setState(st, this.projectAll);
 	}

 	projectAll(){
	 this.project(this.state.bills.months, "bills");
	 this.project(this.state.income.months, "income");
	 this.project(this.state.miscellaneous.months, "miscellaneous");
	 this.project(this.state.food.months, "food");
	 this.project(this.state.groceries.months, "groceries");
	 this.project(this.state.entertainment.months, "entertainment");
 	}

	project(data, model){

    let results = [];
	getPredictions(tf.tensor(data, [1, 11, 1]), model).then(
	(ar1) =>{
		results.push(Array.prototype.slice.call(ar1)[0]);
    	return getPredictions(tf.tensor(data.slice(results.length).concat(results), [1, 11, 1]), model);  
	}).then((ar2) => {
		results.push(Array.prototype.slice.call(ar2)[0]);
		return getPredictions(tf.tensor(data.slice(results.length).concat(results), [1, 11, 1]), model);  
	}).then((ar3) => {
		results.push(Array.prototype.slice.call(ar3)[0]);
		return getPredictions(tf.tensor(data.slice(results.length).concat(results), [1, 11, 1]), model);  
	}).then((ar4) => {
		results.push(Array.prototype.slice.call(ar4)[0]);
		return getPredictions(tf.tensor(data.slice(results.length).concat(results), [1, 11, 1]), model);  
	}).then((ar5) => {
		results.push(Array.prototype.slice.call(ar5)[0]);
		return getPredictions(tf.tensor(data.slice(results.length).concat(results), [1, 11, 1]), model);  
	}).then((ar6) => {
		results.push(Array.prototype.slice.call(ar6)[0]);
		this.setState({[model + "p"]: results, finished: (this.state.finished + 1)});
	})
	}

	sumData(){
		const cat = ["income", "bills", "miscellaneous", "food", "groceries", "entertainment"]
	 	const numData = 11;
	 	const predictedNum = 6;

	 	console.log(this.state[cat[0]].months[0]);
	 	console.log(this.state[cat[1]].months[0]);
	 	console.log(this.state[cat[2]].months[0]);
	 	console.log(this.state[cat[3]].months[0]);
	 	console.log(this.state[cat[4]].months[0]);
	 	console.log(this.state[cat[5]].months[0]);
	 	let sums = [];
		for(let j = 0; j < numData; j++){
			let curr = 0;
			for(let i = 1; i < cat.length; i++){
				curr -= this.state[cat[i]].months[j];
			}
			curr += this.state[cat[0]].months[j]; 
			sums.push(curr);
		}

		for(let j = 0; j < predictedNum; j++){
			let curr = 0;
			for(let i = 1; i < cat.length; i++){
				curr -= this.state[cat[i] + "p"][j];
			}
			curr += this.state[cat[0] + "p"][j];
			sums.push(curr);
		}
		return sums;
	}

   render(){
   	let sum = [];
   	if(this.state.finished == 6) {
   		sum = this.sumData();
   	}
	const accounts = [
		{ name: "Chequing", bal: "3000" },
		{ name: "Savings", bal: "1500" }
	]
	return (
        <div className="colorBackground fullHeight">
          <Sidebar/>
          <Grid>
            <Row>
              <div className="mainContent">
                <TitleBar name="John"/>
              </div>
            </Row>
            <Row className="mainContent">
              <Col md={3} height="400">
                <Row span='2'>
                  <Accounts accounts={ accounts }/>
                </Row>
                <Row>
                  <HintBox hint={ "A penny saved is a penny earned." }/>
                </Row>
                <Row>

                </Row>
              </Col>
              <Col md={8}>
                <Graph data={sum} />
				<CategoryChart categories={
          [this.state.income,
          this.state.bills,
          this.state.miscellaneous,
          this.state.food,
          this.state.groceries,
          this.state.entertainment
          ]} predictions={
          [this.state.incomep,
          this.state.billsp,
          this.state.miscellaneousp,
          this.state.foodp,
          this.state.groceriesp,
          this.state.entertainmentp]
      		}/>
              </Col>
            </Row>
          </Grid>
         </div>
     );
   }
}



// function project(data, model){
// 	let a1 = getPredictions(tf.tensor(data, [1, 11, 1]), model);
// 	let a2 = getPredictions(tf.tensor(data.slice(1).concat(a1[a1.length-1]), [1, 11, 1]), model);
// 	let a3 = getPredictions(tf.tensor(a1.slice(1).concat(a2[a2.length-1]), [1, 11, 1]), model);
// 	let a4 = getPredictions(tf.tensor(a2.slice(1).concat(a3[a3.length-1]), [1, 11, 1]), model);
// 	let a5 = getPredictions(tf.tensor(a3.slice(1).concat(a4[a4.length-1]), [1, 11, 1]), model);
// 	let a6 = getPredictions(tf.tensor(a4.slice(1).concat(a5[a5.length-1]), [1, 11, 1]), model);
// 	return [a1[a1.length-1], a2[a2.length-1], a3[a3.length-1], a4[a4.length-1], a5[a5.length-1], a6[a6.length-1]];
// }


function sumData() {
	var sum = this.state.bills.map(function (num, i) { return num + this.state.income[i]; });
	sum = sum.map(function (num, i) { return num + this.state.groceries[i]; });
	sum = sum.map(function (num, i) { return num + this.state.food[i]; });
	sum = sum.map(function (num, i) { return num + this.state.miscellaneous[i]; });
	sum = sum.map(function (num, i) { return num + this.state.entertainment[i]; });
	return sum;
}

function generateRandomData(AVG_SPEND, STD_DEV, BIAS_AVG, BIAS_STDDEV, BIAS_PERMONTH){
  let data = [];

  let inc = randomNorm(AVG_SPEND, STD_DEV)
  inc = Math.abs(Math.round(inc, 0))
  let bias =  randomNorm(BIAS_AVG, BIAS_STDDEV) 
  for(let j = 0; j < 11; j++) {//  Data point for each month
  let r = Math.round(randomNorm(bias * j, BIAS_PERMONTH), 2)
  data[j] = inc + r;
  }
  return data;
}

  //pass in the mean and standard deviation
function randomNorm(mean, stdev) {
  return (Math.round((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1))*stdev+mean);
}
