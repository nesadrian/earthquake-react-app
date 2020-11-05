import React, { useState, useEffect } from 'react'
import List from './components/List'
import './App.css';
import { fetchByDates } from './api'
import { dateToISO } from './helpers'

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  //console.log(process.env.REACT_APP_HERE_MAPS_API_KEY);

  const getLatestEarthquakes = async () => {
    const now = dateToISO(new Date());
    let weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    weekAgo = dateToISO(weekAgo);
    const data = await fetchByDates(weekAgo, now);
    return data.earthquakes;
  }

  useEffect(() => {
    (async () => {
      const earthquakes = await getLatestEarthquakes();
      setEarthquakes(earthquakes);
    })()
  }, [])

  return (
    <div className="App">
      <List earthquakes={earthquakes} />
    </div>
  );
}

export default App;
