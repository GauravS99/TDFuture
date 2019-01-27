import React from 'react';
import {Table} from 'react-bootstrap'

export class CategoryChart extends React.Component{
	constructor(props){
		super(props);
		this.state = { categories: props.categories };
	}

	render(){
		const categories = this.state.categories.map(category => (
			<tr>
				<th>{category.name}</th>
				<th>{category.thisMonth}</th>
				<th>{category.projected}</th>
			</tr>
		));
		return (
			<div>
				<Table hover>
					<thead>
						<tr>
							<th>Category</th>
							<th>This month</th>
							<th>Projected Next Month</th>
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