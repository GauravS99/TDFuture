import React from 'react';
import {Sidebar} from './Sidebar'

import {TitleBar} from './TitleBar'
import {Accounts} from './Accounts'
import {HintBox} from './HintBox'
import {Graph} from './Graph'
import {CategoryChart} from './CategoryChart'
import {Grid, Row, Col} from 'react-bootstrap'

export class App extends React.Component{
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
