var express = require('express');
var cors = require('cors')
var app = express();
const { fetchByDates } = require('./api');

app.use(cors())

let mockData = null;

app.get('/api/earthquakes/query&starttime=:starttime&endtime=:endtime', async (req, res) => {
  const { starttime, endtime } = req.params;
  if (!mockData) {
    mockData = await fetchByDates(starttime, endtime)
    mockData.features = mockData.features.slice(0, 10);
    console.log(mockData);
    console.log("FETCH BACKEND API");
  }
  const data = {
    count: mockData.metadata.count,
    earthquakes: mockData.features.map(earthquake => ({ ...earthquake, selected: false }))
  }
  // const apiData = await fetchByDates(starttime, endtime)
  // const data = {
  //   count: apiData.metadata.count,
  //   earthquakes: apiData.features
  // }
  res.send(data);
});

app.get('/', (req, res) => {
  res.send('test')
});

app.listen(5000, (console.log('Server is running on port 5000...')));
