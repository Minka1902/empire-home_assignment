class dataApi {
    constructor(props) {
        this._rootUrl = props.rootUrl;
    }

    _fetch = () =>
        fetch(`${this._rootUrl}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': '<calculated when request is sent>',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Host': '<calculated when request is sent>',
            },
            // body: JSON.stringify(data),
        }).then(this._handleResponse)

    _handleResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

    fetchData = () => this._fetch()
}
// ! REAL API
const dataApiOBJ = new dataApi({ rootUrl: 'https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume' });
export default dataApiOBJ;
