import React from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';
import "../components/Content.css";


class Home extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            data : {
                labels: ['Comprehensive', 'Moderate'],
                datasets: [
                  {
                    label: 'Type of Engagement (UN PRI definations',
                    backgroundColor: '#3366CC',
                    borderColor: '#3366CC',
                    borderWidth: 1,
                    hoverBackgroundColor: '#3366CC',
                    hoverBorderColor: '#3366CC',
                    data: [19,86]
                  }
                ]
            }
        };
    }
    render() 
    {
        return (
            <div>
                <h2>Bar Example (custom size)</h2>
                <Bar
                data={this.state.data}
                width={50}
                height={100}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false
                             }
                        }],
                        xAxes: [{
                            barPercentage: 0.1,
                            gridLines: {
                                display: false
                             }
                        }]
                    }
                }}
                />
                
            </div>
        );
    }
}

export default Home;