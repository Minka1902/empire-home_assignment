import React from 'react';
import Chart from '../chart/Chart';
import HistoryTable from '../historyTable/HistoryTable';

export default function Tabs({ data, onTimeFrameChange }) {
    const [activeTab, setActiveTab] = React.useState('Overview');

    return (
        <div>
            <div className="tabs">
                <button className={activeTab === 'Overview' ? 'active' : ''} onClick={() => setActiveTab('Overview')}>
                    Overview
                </button>
                <button className={activeTab === 'History' ? 'active' : ''} onClick={() => setActiveTab('History')}>
                    History
                </button>
            </div>
            {activeTab === 'Overview' && <Chart data={data} onTimeFrameChange={onTimeFrameChange} />}
            {activeTab === 'History' && <HistoryTable history={data} />}
        </div>
    );
};
