import React from 'react';
import SortableTable from './SortableTable';
import AdsInsights from './AdsInsights';

const Dashboard = () => {
    return (
        <div class="main-container">
            <div class="table-container">
                <h2 className="graphs-header">Ad Insights</h2>
                <SortableTable />
            </div>

            <div class="graph-container">
                <AdsInsights />
            </div>
        </div>

    );
};

export default Dashboard;