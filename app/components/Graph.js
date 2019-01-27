import React from "react";
import { Chart } from "react-charts";
 
export class Graph extends React.Component { 
    
    render() {
        return (
            <div className="graph content">
                <Chart
                data={[
                    {
                    label: "Series 1",
                    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                    },
                    {
                    label: "Series 2",
                    data: [[2, 5], [2, 4], [2, 3], [2, 2], [2, 1]]
                    }
                ]}
                axes={[
                    { primary: true, type: "ordinal", position: "bottom" },
                    { type: "ordinal", position: "left" }
                ]}
                />
            </div>
        );
    }
}