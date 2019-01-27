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
	console.log(getPredictions(tf.tensor([3000, 3029, 4732, 4563, 2038, 3823, 4837, 3746, 2374, 3546, 3445], [1, 11, 1]), 'bills'))
	   
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
