import React from 'react';
import {Sidebar} from './Sidebar'

import {TitleBar} from './TitleBar'
import {Accounts} from './Accounts'
import {HintBox} from './HintBox'
import {Graph} from './Graph'
import {Grid, Row, Col} from 'react-bootstrap'

export class App extends React.Component{
   render(){
	const accounts = [
		{ name: "Chequing", bal: "3000" },
		{ name: "Savings", bal: "1500" }
	]
	return (
		<div>
      <Sidebar/>
			<Grid className="grid" fluid="true">
				<Row>
          <TitleBar name="John"/>
					<Col md={1}>
					</Col>
					<Col md={11}>
						
					</Col>
				</Row>
				<Row>
					<Col md={1}>

					</Col>
					<Col md={4}>
						<Accounts accounts={ accounts }/>
						<HintBox hint={ "Hi I'm a hint" }/>
					</Col>
					<Col md={7}>
						<Graph/>
					</Col>
				</Row>
			</Grid>
		</div>
     );
   }
}
