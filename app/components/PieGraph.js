import React from "react";
import {RadialChart} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';

export class PieGraph extends React.Component { 
    
	constructor(props){
		super(props)
		this.state = {data: props.data}
	}
	
    render() {
        const data = [{angle: 1}, {angle: 5}, {angle: 2}]

        const theme = 'rgb(0, 204, 0)';
        return (
        <div className="graph">
            <RadialChart height={200} width={300} innerRadius={50} data={data}>
            </RadialChart>
        </div>
        );
    }
}