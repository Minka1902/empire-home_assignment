import React from 'react';
import CurrentTimeContext from '../../contexts/CurrentTimeContext';
import { reduceDays, reduceMonth, reduceYear } from '../../utils/timeDiff.ts';
import { formatDateString } from '../../constants/functions.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ data, onTimeFrameChange }) {
    const [time, setTime] = React.useContext(CurrentTimeContext);

    React.useEffect(() => {
        onTimeFrameChange();
    }, [time]);

    return (
        <div className="chart">
            <div className="chart__selector">
                <button onClick={() => setTime({ end: time.end, start: formatDateString(reduceDays(time.end, 2)) })}>1 Day</button>
                <button onClick={() => setTime({ end: time.end, start: formatDateString(reduceDays(time.end, 8)) })}>1 Week</button>
                <button onClick={() => setTime({ end: time.end, start: formatDateString(reduceMonth(time.end, 1)) })}>1 Month</button>
                <button onClick={() => setTime({ end: time.end, start: formatDateString(reduceYear(time.end, 1)) })}>1 Year</button>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Open" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
