const fetch = require('node-fetch');

const baseUrl = ' https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson'

const fetchByDates = async (startDate, endDate) => {
  const url = baseUrl + `&starttime=${startDate}&endtime=${endDate}`
  console.log(url);
  return fetch(url).then(res => res.json())
}

module.exports = {
  fetchByDates
}
