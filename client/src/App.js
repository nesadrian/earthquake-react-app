import React, { useState, useEffect } from 'react'
import List from './components/List'
import HereMap from './components/Map'
import Sort from './components/Sort.js'
import './App.css';
import { fetchByDates } from './api'
import { getDateWeekAgo, getDateNow } from './helpers'

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [map, setMap] = useState(undefined)
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  // Because list won't rerender based on earthquake state change
  const [test, setTest] = useState(undefined)

  const setDate = (date, isFrom) => isFrom ? setStartDate(date) : setEndDate(date)

  const sortOrder = (val, isAsc) => {
    let orderedEarthquakes = earthquakes;
    orderedEarthquakes = orderedEarthquakes.sort((a, b) =>
      isAsc
        ? a.properties[val] - b.properties[val]
        : b.properties[val] - a.properties[val]
    )
    setEarthquakes(orderedEarthquakes)
    setTest(Math.random())
  }

  const sortOrderReverse = () => {
    let orderedEarthquakes = earthquakes;
    orderedEarthquakes.reverse();
    setEarthquakes(orderedEarthquakes);
    setTest(Math.random())
  }

  const toggleSelected = id => {
    const newEarthquakes = earthquakes.map(earthquake => (earthquake.id === id
      ? { ...earthquake, selected: !earthquake.selected }
      : earthquake
    ));
    setEarthquakes(newEarthquakes);
  }

  // const getLatestEarthquakes = async () => {
  //   const now = dateToISO(new Date());
  //   let weekAgo = new Date()
  //   weekAgo.setDate(weekAgo.getDate() - 7)
  //   weekAgo = dateToISO(weekAgo);
  //   const data = await fetchByDates(weekAgo, now);
  //   return data.earthquakes;
  // }

  // useEffect(() => {
  //   (async () => {
  //     const earthquakes = await getLatestEarthquakes();
  //     setEarthquakes(earthquakes);
  //   })()
  // }, [])

  useEffect(() => {
    setStartDate(getDateWeekAgo());
    setEndDate(getDateNow())
  }, [])

  useEffect(() => {
    if (!startDate || !endDate) return
    console.log(startDate, endDate);
    (async () => {
      const data = await fetchByDates(startDate, endDate);
      setEarthquakes(data.earthquakes);
    })()
  }, [startDate, endDate])

  return (
    <div className="App">
      <main className="container">
        <section className="sidebar-container">
          <Sort sortOrder={sortOrder} sortOrderReverse={sortOrderReverse} setDate={setDate} />
          <List s={test} earthquakes={earthquakes} toggleSelected={toggleSelected} map={map} />
        </section>
        <HereMap earthquakes={earthquakes} toggleSelected={toggleSelected} setMap={setMap} />
      </main>
    </div>
  );
}

export default App;
