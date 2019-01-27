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
  
  async componentDidMount() {
	var bills = generateRandomData(5000, 0, 0, 0, 0);
	var income = generateRandomData(7000, 100, 0, 2, 3);
	var miscellaneous = generateRandomData(200, 20, 15, 3, 5);
	var food = generateRandomData(120, 30, 10, 4, 8);
	var groceries = generateRandomData(400, 30, 10, 5, 10);
	var entertainment = generateRandomData(50, 20, 4, 3, 5);
    var st = {bills: {name: "Bills", months: bills, projected: project(bills, 'bills')},
                  income: { name: "Income", months: income, projected: project(income, 'income')},
                  miscellaneous: { name: "Miscellaneous", months: miscellaneous, projected: project(miscellaneous, 'miscellaneous')},
                  food: {name: "Food", months: food, projected: project(food, 'food')},
                  groceries: { name: "Groceries", months: groceries, projected: project(groceries, 'groceries')},
                  entertainment: { name: "Entertainment", months: entertainment, projected: project(entertainment, 'entertainment')}
              };
	this.setState(st);
}
	
   render(){
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
                <Graph data={sumData()} />
				<CategoryChart categories={
          [this.state.bills,
          this.state.income,
          this.state.miscellaneous,
          this.state.food,
          this.state.entertainment
          ]}/>
              </Col>
            </Row>
          </Grid>
         </div>
     );
   }
}

function project(data, model){
		let a1 = getPredictions(tf.tensor(data, [1, 11, 1]), model);
		print(a1)
		let a2 = getPredictions(tf.tensor(data.slice(1).concat(a1[a1.length-1]), [1, 11, 1]), model);
		let a3 = getPredictions(tf.tensor(a1.slice(1).concat(a2[a2.length-1]), [1, 11, 1]), model);
		let a4 = getPredictions(tf.tensor(a2.slice(1).concat(a3[a3.length-1]), [1, 11, 1]), model);
		let a5 = getPredictions(tf.tensor(a3.slice(1).concat(a4[a4.length-1]), [1, 11, 1]), model);
		let a6 = getPredictions(tf.tensor(a4.slice(1).concat(a5[a5.length-1]), [1, 11, 1]), model);
		return [a1[a1.length-1], a2[a2.length-1], a3[a3.length-1], a4[a4.length-1], a5[a5.length-1], a6[a6.length-1]];
	}

function  onRefresh(){
      this.setState({bills: {name: "Bills", months: generateRandomData(5000, 0, 0, 0, 0), projected: []},
      income: { name: "Income", months: generateRandomData(7000, 100, 0, 2, 3), projected: []},
      miscellaneous: { name: "Miscellaneous", months: generateRandomData(200, 20, 15, 3, 5), projected: []},
      food: {name: "Food", months: generateRandomData(120, 30, 10, 4, 8), projected: []},
      groceries: { name: "Groceries", months: generateRandomData(400, 30, 10, 5, 10), projected: []},
      entertainment: { name: "Entertainment", months: generateRandomData(50, 20, 4, 3, 5), projected: []}});
   }

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
