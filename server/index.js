var express = require('express');
var app = express();
const { fetchByDates } = require('./api');

app.get('/api/earthquakes/query&starttime=:starttime&endtime=:endtime', async (req, res) => {
  const { starttime, endtime } = req.params;
  const apiData = await fetchByDates(starttime, endtime)
  const data = {
    count: apiData.metadata.count,
    earthquakes: apiData.features
  }
  res.send(data);
});

app.get('/', (req, res) => {
  res.send('test')
});

app.listen(5000, (console.log('Server is running on port 5000...')));
