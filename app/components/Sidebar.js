import React from 'react';
import {Image} from 'react-bootstrap';

export class Sidebar extends React.Component{
	render(){
		//let source = require("../images/person-icon.png");
		return (
			<div className="sidebar white flexBox">	
				<div className="title headingColor def-text">
					forecas
				</div>
				<div className="sideItem">
					<img src="../resources/images/dash_green.svg"/>
				</div>
				<div className="sideItem">
					<img src="../resources/images/transactions.svg"/>
				</div>
				<div className="sideItem">
					<img src="../resources/images/budget.svg"/>
				</div>
				<div className="heading right def-text">
					Log Out
				</div>
			</div>
		);
	}
}

//<Image className="icon" src={source} circle/>