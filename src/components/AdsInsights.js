import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ReactSwitch from 'react-switch';
import GraphsTable from './GraphsTables';

ChartJS.register(ArcElement, Tooltip, Legend);


const AdsInsights = () => {
    const [showChart, setShowChart] = useState(true);
    const [selectedMatrix, setSelectedMatrix] = useState('Click');

    // Function to get chart data based on the selected matrix
    const getChartData = (matrix) => {
        switch (matrix) {
            case 'Click':
                return [30, 40, 30];
            case 'Impressions':
                return [20, 50, 30];
            case 'Conversions':
                return [10, 60, 30];
            default:
                return [0, 0, 0];
        }
    };

    const data = {
        labels: ['Male', 'Female', 'Unknown'],
        datasets: [
            {
                data: getChartData(selectedMatrix),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const matrixOptions = ['Click', 'Impressions', 'Conversions'];

    const handleMatrixChange = (event) => {
        setSelectedMatrix(event.target.value);
    };

    const options = {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
    const toggleView = () => {
        setShowChart((prev) => !prev);
    };



    return (
        <div>
            <h2 className="graphs-header">
                Ad Insights
                <select value={selectedMatrix} onChange={handleMatrixChange} className='select-metrix'>
                    {matrixOptions.map((matrix) => (
                        <option key={matrix} value={matrix}>
                            {matrix}
                        </option>
                    ))}
                </select>

            </h2>
            {showChart ? (
                <>
                    <div>
                        <div className="doughnut-chart">
                            <Doughnut data={data} options={options} />
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <GraphsTable />
                </div>
            )}
            <ReactSwitch
                checked={showChart}
                onChange={toggleView}
                className="graph-toggle-click"
            />
        </div>
    );
};

export default AdsInsights;
