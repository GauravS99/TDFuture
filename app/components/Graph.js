import React from "react";
//import { Chart } from "react-charts";
import {XYPlot, VerticalGridLines, HorizontalGridLines, LineSeries, XAxis, YAxis} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
 
export class Graph extends React.Component { 
    
    // render() {
    //     return (
    //         <div className="graph content">
    //             <Chart
    //             data={[
    //                 {
    //                 label: "Series 1",
    //                 data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    //                 },
    //                 {
    //                 label: "Series 2",
    //                 data: [[2, 5], [2, 4], [2, 3], [2, 2], [2, 1]]
    //                 }
    //             ]}
    //             axes={[
    //                 { primary: true, type: "linear", position: "bottom" },
    //                 { type: "linear", position: "left" }
    //             ]}
    //             />
    //         </div>
    //     );
    // }

    // import React, { Component } from 'react';
    // import './App.css';
    // import '../node_modules/react-vis/dist/style.css';
    // import {XYPlot, LineSeries} from 'react-vis';
    render() {
        const numMonths = -11;
        let data = [];
        for(let i = 0 ; i < this.props.data.length; i++){
            data.push({x: (numMonths + i), y: this.props.data[i]});
        }

        const theme = 'rgb(0, 204, 0)';
        return (
        <div className="graph">
            <div className= "def-text-bold center-text">Overall Balance</div>
            <XYPlot height={400} width={500}><XAxis/><YAxis/>
                <VerticalGridLines data={data} />
                <HorizontalGridLines data={data} />
                <LineSeries color={theme} data={data} />
            </XYPlot>
        </div>
        );
    }
}