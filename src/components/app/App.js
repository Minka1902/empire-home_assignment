import React from 'react';
import Header from './../header/Header';
import Tabs from './../tabs/Tabs';
import CurrentTimeContext from '../../contexts/CurrentTimeContext';
import axios from 'axios';

export default function App() {
    const [data, setData] = React.useState([]);
    const [time, setTime] = React.useState({ period: '30', start: `06/10/2024`, end: `${new Date().getMonth() + 1 > 10 ? new Date().getMonth() + 1 : `0${new Date().getMonth() + 1}`}/${new Date().getDate()}/${new Date().getFullYear()} 23:59` });

    const fetchData = async () => {
        const date = new Date();
        const response = await axios.get('https://test.fxempire.com/api/v1/en/stocks/chart/candles', {
            params: {
                Identifier: 'AAPL.XNAS',
                IdentifierType: 'Symbol',
                AdjustmentMethod: 'All',
                IncludeExtended: 'True',
                period: '30',
                Precision: 'Minutes',
                StartTime: time.start,
                EndTime: time.end,
                _fields: 'ChartBars.Price,ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume',
            },
        });

        setData(response.data);
    };

    const calcPriceChange = () => {
        if (data) {
            if (data[data.length - 1] && data[data.length - 2]) {
                var change = data[data.length - 1].High - data[data.length - 2].High;
            }
            return change;
        }
    }

    return (
        <CurrentTimeContext.Provider value={[time, setTime]}>
            <div className="App">
                <Header price={data[data.length - 1] && data[data.length - 1].Open} priceChange={calcPriceChange()} percentChange={-1.08} lastUpdated={data[data.length - 1] && data[data.length - 1].Date} />
                <Tabs data={data} onTimeFrameChange={fetchData} />
            </div>
        </CurrentTimeContext.Provider>
    );
};
