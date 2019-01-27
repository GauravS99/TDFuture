import React from 'react';
import {Sidebar} from './Sidebar'
import {TitleBar} from './TitleBar'
import {Accounts} from './Accounts'
import {HintBox} from './HintBox'
import {Grid, Row, Col} from 'react-bootstrap'

export class App extends React.Component{
   render(){
	const accounts = [
		{ name: "Chequing", bal: "3000" },
		{ name: "Savings", bal: "1500" }
	]
	return (
		<Grid>
			<Row>
				<Col sm={3} md={6}>
					<div>
						<Sidebar/>
					</div>
				</Col>
				<Col sm={9} md={6}>
					<TitleBar name="John"/>
					<Accounts accounts={ accounts }/>
					<HintBox hint={ "Hi I'm a hint" }/>
				</Col>
			</Row>
		</Grid>
     );
   }
}
