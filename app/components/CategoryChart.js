import React from 'react';
import {Table} from 'react-bootstrap'
import {MonthColumns} from './MonthColumns'

export class CategoryChart extends React.Component{

	render(){
		let categories = [];

		for(let i = 0; i < this.props.categories.length; i++){
			categories.push(
			(
			 <tr>
				<th>{this.props.categories[i].name}</th>
				<MonthColumns months={this.props.categories[i].months}/>
				<MonthColumns months={this.props.predictions[i]}/>
			</tr>
			)
			);

		}

		// let categories = this.props.categories.map(category => (
		// 	<tr>
		// 		<th>{category.name}</th>
		// 		<MonthColumns months={category.months}/>
		// 	</tr>
		// ));
		// let predicted = this.props.predictions.map(category => (
		// 	<tr>
		// 		<MonthColumns months={category}/>
		// 	</tr>
		// ));

		// categories = categories.concat(predicted);
		
		return (
			<div>
				<Table hover>
					<thead>
						<tr>
							<th>Category</th>
							<th>11mo ago</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th>6mo ago</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
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