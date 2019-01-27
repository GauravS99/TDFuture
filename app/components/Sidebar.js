import React from 'react';
import {Image} from 'react-bootstrap';

export class Sidebar extends React.Component{
	render(){
		let source = require("../images/person-icon.png");
		return (
			<div className="sidebar colorAccent">
				<Image className="icon" src={source} circle/>
			</div>
		);
	}
}