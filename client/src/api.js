const baseUrl = 'http://localhost:5000'

const fetchUrl = async (url) => {
  return fetch(url)
    .then(res => res.json());
}

const fetchByDates = async (startdate, endDate) => {
  const url = baseUrl + `/api/earthquakes/query&starttime=${startdate}&endtime=${endDate}`
  return await fetchUrl(url);
}

export { fetchByDates };
