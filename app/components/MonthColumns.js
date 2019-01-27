import React from 'react';
import {Table} from 'react-bootstrap'

export class MonthColumns extends React.Component{
	constructor(props){
		super(props);
		this.state = { months: props.months };
	}
	
	render(){
		const months = this.state.months.map(month => (
			<th>{month}</th>
		));
		return months;
	}
}