import React from "react";

export default function HistoryTable({ history }) {
    const [displayedHistory, setDisplayedHistory] = React.useState([]);

    const calcPriceChange = (index) => {
        if (displayedHistory[index] && displayedHistory[index - 1]) {
            const currentHigh = displayedHistory[index].High;
            const previousHigh = displayedHistory[index - 1].High;
            const percentChange = ((currentHigh - previousHigh) / previousHigh * 100).toFixed(4);
            return percentChange;
        } else {
            if (index === 0) {
                const currentHigh = displayedHistory[index].High;
                const previousHigh = history[history.length - 22].High;
                const percentChange = ((currentHigh - previousHigh) / previousHigh * 100).toFixed(4);
                return percentChange;
            }
        }
    };

    React.useEffect(() => {
        if (history.length > 20) {
            setDisplayedHistory(history.slice(history.length - 21, history.length - 1));
        } else {
            setDisplayedHistory(history);
        }
    }, [history]);

    return (
        <div className="data-table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Open</th>
                        <th>Close</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedHistory && displayedHistory.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td>{item.Date}</td>
                            <td>{item.High}</td>
                            <td>{item.Low}</td>
                            <td>{item.Open}</td>
                            <td>{item.Close}</td>
                            <td>{calcPriceChange(index)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
