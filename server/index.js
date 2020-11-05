var express = require('express');
var app = express();
const { fetchByDates } = require('./api');

app.get('/api/', async (req, res) => {
  const data = await fetchByDates('2014-01-01', '2014-01-02')
  res.send(data)
});

app.get('/', (req, res) => {
  res.send('test')
});

app.listen(5000, (console.log('Server is running on port 5000...')));
