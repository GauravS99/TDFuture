import React from 'react';

export class TitleBar extends React.Component{

	constructor(props){
		super(props);
		this.state = {accountIndex: 0};
		//this.handleClick = this.handleClick.bind(this);	
	}

	render(){
		return (
			<div className="content colorMain">
				<div className="heading">
					<div className="right text def-text">
					Log Out
					</div>
				</div>
				<div className="welcome headingColor def-text">
					Welcome back, {this.props.name}
				</div>
			</div>
		);
	}
}