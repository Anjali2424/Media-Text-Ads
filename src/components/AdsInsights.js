import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ReactSwitch from 'react-switch';
import GraphsTable from './GraphsTables';

ChartJS.register(ArcElement, Tooltip, Legend);
  

const AdsInsights = () => {
    const [showChart, setShowChart] = useState(true);
    const [selectedMetric, setSelectedMetric] = useState('clicks');

    const data = {
        labels: ['Male', 'Female', 'Unknown'],
        datasets: [
            {
                data: [40, 35, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const toggleView = () => {
        setShowChart((prev) => !prev);
    };

    const handleMetricChange = (e) => {
        setSelectedMetric(e.target.value);
    };

    const options = {
        plugins: {
           legend: {
              position: 'right'
           }
        }
     }

    return (
        <div>
            <h2 className="graphs-header">
                Ad Insights
                <select value={selectedMetric} onChange={handleMetricChange} className='select-metrix'>
                    <option value="clicks">Clicks</option>
                    <option value="impressions">Impressions</option>
                    <option value="conversions">Conversions</option>
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
