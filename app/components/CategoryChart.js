import React from 'react';
import {Table} from 'react-bootstrap'
import {MonthColumns} from './MonthColumns'

export class CategoryChart extends React.Component{
	constructor(props){
		super(props);
		this.state = { categories: props.categories };
	}
	
	render(){
		const categories = this.state.categories.map(category => (
			<tr>
				<th>{category.name}</th>
				<MonthColumns months={category.months}/>
				<MonthColumns months={category.projected}/>
			</tr>
		));
		return (
			<div>
				<Table hover>
					<thead>
						<tr>
							<th>Category</th>
							<th>11m ago</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th>6m ago</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th>Now</th>
							<th>Projected</th>
						</tr>
					</thead>
					<tbody>
						{categories}
					</tbody>
				</Table>
			</div>
		);
	}
}