import React, { useState, useEffect } from 'react'
import List from './components/List'
import HereMap from './components/Map'
import './App.css';
import { fetchByDates } from './api'
import { dateToISO } from './helpers'

function App() {
  const [earthquakes, setEarthquakes] = useState([]);

  const toggleSelected = id => {
    const newEarthquakes = earthquakes.map(earthquake => (earthquake.id === id
      ? { ...earthquake, selected: !earthquake.selected }
      : earthquake
    ));
    setEarthquakes(newEarthquakes);
  }

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
      console.log(earthquakes);
      setEarthquakes(earthquakes);
    })()
  }, [])
  //<HereMap earthquakes={earthquakes} toggleSelected={toggleSelected}/>
  return (
    <div className="App">
      <main className="container">
        <List earthquakes={earthquakes} toggleSelected={toggleSelected} />

      </main>
    </div>
  );
}

export default App;
