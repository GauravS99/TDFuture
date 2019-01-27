import React from 'react';
import {Sidebar} from './Sidebar'
import * as tf from '@tensorflow/tfjs';


import {TitleBar} from './TitleBar'
import {Accounts} from './Accounts'
import {HintBox} from './HintBox'
import {Graph} from './Graph'
import {CategoryChart} from './CategoryChart'
import {PieGraph} from './PieGraph'
import {Grid, Row, Col} from 'react-bootstrap'

import {getPredictions} from './Predictions'

export class App extends React.Component{
	
	project(data, model){
		a1 = getPredictions(data, model);
		a2 = getPredictions([data.slice(1), a1[a1.length-1]], model);
		a3 = getPredictions([a1.slice(1), a2[a2.length-1]], model);
		a4 = getPredictions([a2.slice(1), a3[a3.length-1]], model);
		a5 = getPredictions([a3.slice(1), a4[a4.length-1]], model);
		a6 = getPredictions([a4.slice(1), a5[a5.length-1]], model);
		return [a1[a1.length-1], a2[a2.length-1], a3[a3.length-1], a4[a4.length-1], a5[a5.length-1], a6[a6.length-1]];
	}
	
   render(){
    getPredictions(tf.tensor([3000, 3029, 4732, 4563, 2038, 3823, 4837, 3746, 2374, 3546, 3445], [1, 11, 1]), 'bills')
	   
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
                  <PieGraph />
                </Row>
              </Col>
              <Col md={8}>
                <Graph/>
				<CategoryChart categories={
          [{ name: "Bills", months: generateRandomData(5000, 0, 0, 0, 0), projected: [11]},
          { name: "Income", months: generateRandomData(7000, 100, 0, 2, 3), projected: [11]},
          { name: "Groceries", months: generateRandomData(400, 30, 10, 5, 10), projected: [11]},
          { name: "Food", months: generateRandomData(120, 30, 10, 4, 8), projected: [11]},
          { name: "Miscellaneous", months: generateRandomData(200, 20, 15, 3, 5), projected: [11]},
          { name: "Entertainment", months: generateRandomData(50, 20, 4, 3, 5), projected: [11]}
          ]}/>
              </Col>
            </Row>
          </Grid>
         </div>
     );
   }
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
