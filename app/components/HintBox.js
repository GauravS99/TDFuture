import React from 'react';
import {Alert} from 'react-bootstrap'

export class HintBox extends React.Component{
	constructor(props){
		super(props);
		this.state = { hint: props.hint };
	}
	
	render(){
		return (
			<div>
				<Alert bsStyle="info">
				  { this.state.hint }
				</Alert>
			</div>
		);
	}
}