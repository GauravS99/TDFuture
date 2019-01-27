import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

export class Accounts extends React.Component{
	constructor(props){
		super(props);
		this.state = {accounts: props.accounts};
	}
	
	render(){
		const accounts = this.state.accounts.map(account => (
			<Button className = "account">{account.name} - {account.bal}</Button>
		));
		return (
			<div>
				<ButtonGroup  vertical block className="def-text">
					{ accounts }
				</ButtonGroup>
			</div>
		);
	}
}