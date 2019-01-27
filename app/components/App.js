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
              <Col md={4} height="400">
                <Row span='2'>
                  <Accounts accounts={ accounts }/>
                </Row>
                <Row>
                  <HintBox hint={ "Hi I'm a hint" }/>
                </Row>
                <Row>
                  
                </Row>
              </Col>
              <Col md={7}>
                <Graph/>
				<CategoryChart categories={[{ name: "Income", thisMonth: "12", projected: "11"}]}/>
              </Col>
            </Row>
          </Grid>
         </div>
     );
   }
}


generateRandomData(AVG_SPEND, STD_DEV, BIAS_AVG, BIAS_STDDEV, BIAS_PERMONTH){
  let data = [];

  inc = this.randomNorm(AVG_SPEND, STD_DEV)
  inc = Math.abs(round(inc, 0))
  bias =  this.randomNorm(BIAS_AVG, BIAS_STDDEV) 
  for(j = 0; j < 11; j++) {//  Data point for each month
  r = Math.round(random.normal(bias * j, BIAS_PERMONTH), 2)
  data[j] = inc + r;
  }
  return data;
}

  //pass in the mean and standard deviation
 randomNorm(mean, stdev) {
return Math.round((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1))*stdev+mean);
 }
