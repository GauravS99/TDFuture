import React from 'react';
import {Table} from 'react-bootstrap'

export class MonthColumns extends React.Component{	
	render(){
		const months = this.props.months.map(month => (
			<th>{month.toFixed(2)}</th>
		));
		return months;
	}
}